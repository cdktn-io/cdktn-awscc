// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDBProxyTargetGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info CcDBProxyTargetGroup#connection_pool_configuration_info}
    */
    readonly connectionPoolConfigurationInfo?: CcDBProxyTargetGroup.ConnectionPoolConfigurationInfoFormatProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers CcDBProxyTargetGroup#db_cluster_identifiers}
    */
    readonly dbClusterIdentifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers CcDBProxyTargetGroup#db_instance_identifiers}
    */
    readonly dbInstanceIdentifiers?: string[];
    /**
    * The identifier for the proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#db_proxy_name CcDBProxyTargetGroup#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * The identifier for the DBProxyTargetGroup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#target_group_name CcDBProxyTargetGroup#target_group_name}
    */
    readonly targetGroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}
*/
export class CcDBProxyTargetGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rds_db_proxy_target_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDBProxyTargetGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDBProxyTargetGroup to import
    * @param importFromId The id of the existing CcDBProxyTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDBProxyTargetGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_proxy_target_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDBProxyTargetGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcDBProxyTargetGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_db_proxy_target_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._connectionPoolConfigurationInfo.internalValue = config.connectionPoolConfigurationInfo;
        this._dbClusterIdentifiers = config.dbClusterIdentifiers;
        this._dbInstanceIdentifiers = config.dbInstanceIdentifiers;
        this._dbProxyName = config.dbProxyName;
        this._targetGroupName = config.targetGroupName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_pool_configuration_info - computed: true, optional: true, required: false
    private _connectionPoolConfigurationInfo = new CcDBProxyTargetGroup.ConnectionPoolConfigurationInfoFormatPropertyOutputReference(this, "connection_pool_configuration_info");
    public get connectionPoolConfigurationInfo() {
        return this._connectionPoolConfigurationInfo;
    }
    public putConnectionPoolConfigurationInfo(value: CcDBProxyTargetGroup.ConnectionPoolConfigurationInfoFormatProperty) {
        this._connectionPoolConfigurationInfo.internalValue = value;
    }
    public resetConnectionPoolConfigurationInfo() {
        this._connectionPoolConfigurationInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPoolConfigurationInfoInput() {
        return this._connectionPoolConfigurationInfo.internalValue;
    }

    // db_cluster_identifiers - computed: true, optional: true, required: false
    private _dbClusterIdentifiers?: string[]; 
    public get dbClusterIdentifiers() {
        return this.getListAttribute('db_cluster_identifiers');
    }
    public set dbClusterIdentifiers(value: string[]) {
        this._dbClusterIdentifiers = value;
    }
    public resetDbClusterIdentifiers() {
        this._dbClusterIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifiersInput() {
        return this._dbClusterIdentifiers;
    }

    // db_instance_identifiers - computed: true, optional: true, required: false
    private _dbInstanceIdentifiers?: string[]; 
    public get dbInstanceIdentifiers() {
        return this.getListAttribute('db_instance_identifiers');
    }
    public set dbInstanceIdentifiers(value: string[]) {
        this._dbInstanceIdentifiers = value;
    }
    public resetDbInstanceIdentifiers() {
        this._dbInstanceIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifiersInput() {
        return this._dbInstanceIdentifiers;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // target_group_arn - computed: true, optional: false, required: false
    public get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }

    // target_group_name - computed: false, optional: false, required: true
    private _targetGroupName?: string; 
    public get targetGroupName() {
        return this.getStringAttribute('target_group_name');
    }
    public set targetGroupName(value: string) {
        this._targetGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupNameInput() {
        return this._targetGroupName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connection_pool_configuration_info: ccDBProxyTargetGroupConnectionPoolConfigurationInfoFormatPropertyToTerraform(this._connectionPoolConfigurationInfo.internalValue),
            db_cluster_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dbClusterIdentifiers),
            db_instance_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dbInstanceIdentifiers),
            db_proxy_name: cdktn.stringToTerraform(this._dbProxyName),
            target_group_name: cdktn.stringToTerraform(this._targetGroupName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_pool_configuration_info: {
                value: ccDBProxyTargetGroupConnectionPoolConfigurationInfoFormatPropertyToHclTerraform(this._connectionPoolConfigurationInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDBProxyTargetGroup.ConnectionPoolConfigurationInfoFormatProperty",
            },
            db_cluster_identifiers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dbClusterIdentifiers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            db_instance_identifiers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dbInstanceIdentifiers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            db_proxy_name: {
                value: cdktn.stringToHclTerraform(this._dbProxyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_group_name: {
                value: cdktn.stringToHclTerraform(this._targetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDBProxyTargetGroupConnectionPoolConfigurationInfoFormatPropertyToTerraform(struct?: CcDBProxyTargetGroup.ConnectionPoolConfigurationInfoFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_borrow_timeout: cdktn.numberToTerraform(struct!.connectionBorrowTimeout),
        init_query: cdktn.stringToTerraform(struct!.initQuery),
        max_connections_percent: cdktn.numberToTerraform(struct!.maxConnectionsPercent),
        max_idle_connections_percent: cdktn.numberToTerraform(struct!.maxIdleConnectionsPercent),
        session_pinning_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sessionPinningFilters),
    }
}


export function ccDBProxyTargetGroupConnectionPoolConfigurationInfoFormatPropertyToHclTerraform(struct?: CcDBProxyTargetGroup.ConnectionPoolConfigurationInfoFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_borrow_timeout: {
            value: cdktn.numberToHclTerraform(struct!.connectionBorrowTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        init_query: {
            value: cdktn.stringToHclTerraform(struct!.initQuery),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_connections_percent: {
            value: cdktn.numberToHclTerraform(struct!.maxConnectionsPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_idle_connections_percent: {
            value: cdktn.numberToHclTerraform(struct!.maxIdleConnectionsPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        session_pinning_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sessionPinningFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDBProxyTargetGroup {
export interface ConnectionPoolConfigurationInfoFormatProperty {
    /**
    * The number of seconds for a proxy to wait for a connection to become available in the connection pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#connection_borrow_timeout CcDBProxyTargetGroup#connection_borrow_timeout}
    */
    readonly connectionBorrowTimeout?: number;
    /**
    * One or more SQL statements for the proxy to run when opening each new database connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#init_query CcDBProxyTargetGroup#init_query}
    */
    readonly initQuery?: string;
    /**
    * The maximum size of the connection pool for each target in a target group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#max_connections_percent CcDBProxyTargetGroup#max_connections_percent}
    */
    readonly maxConnectionsPercent?: number;
    /**
    * Controls how actively the proxy closes idle database connections in the connection pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#max_idle_connections_percent CcDBProxyTargetGroup#max_idle_connections_percent}
    */
    readonly maxIdleConnectionsPercent?: number;
    /**
    * Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_target_group#session_pinning_filters CcDBProxyTargetGroup#session_pinning_filters}
    */
    readonly sessionPinningFilters?: string[];
}
export class ConnectionPoolConfigurationInfoFormatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionPoolConfigurationInfoFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionBorrowTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionBorrowTimeout = this._connectionBorrowTimeout;
        }
        if (this._initQuery !== undefined) {
            hasAnyValues = true;
            internalValueResult.initQuery = this._initQuery;
        }
        if (this._maxConnectionsPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConnectionsPercent = this._maxConnectionsPercent;
        }
        if (this._maxIdleConnectionsPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxIdleConnectionsPercent = this._maxIdleConnectionsPercent;
        }
        if (this._sessionPinningFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionPinningFilters = this._sessionPinningFilters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionPoolConfigurationInfoFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionBorrowTimeout = undefined;
            this._initQuery = undefined;
            this._maxConnectionsPercent = undefined;
            this._maxIdleConnectionsPercent = undefined;
            this._sessionPinningFilters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionBorrowTimeout = value.connectionBorrowTimeout;
            this._initQuery = value.initQuery;
            this._maxConnectionsPercent = value.maxConnectionsPercent;
            this._maxIdleConnectionsPercent = value.maxIdleConnectionsPercent;
            this._sessionPinningFilters = value.sessionPinningFilters;
        }
    }

    // connection_borrow_timeout - computed: true, optional: true, required: false
    private _connectionBorrowTimeout?: number; 
    public get connectionBorrowTimeout() {
        return this.getNumberAttribute('connection_borrow_timeout');
    }
    public set connectionBorrowTimeout(value: number) {
        this._connectionBorrowTimeout = value;
    }
    public resetConnectionBorrowTimeout() {
        this._connectionBorrowTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionBorrowTimeoutInput() {
        return this._connectionBorrowTimeout;
    }

    // init_query - computed: true, optional: true, required: false
    private _initQuery?: string; 
    public get initQuery() {
        return this.getStringAttribute('init_query');
    }
    public set initQuery(value: string) {
        this._initQuery = value;
    }
    public resetInitQuery() {
        this._initQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initQueryInput() {
        return this._initQuery;
    }

    // max_connections_percent - computed: true, optional: true, required: false
    private _maxConnectionsPercent?: number; 
    public get maxConnectionsPercent() {
        return this.getNumberAttribute('max_connections_percent');
    }
    public set maxConnectionsPercent(value: number) {
        this._maxConnectionsPercent = value;
    }
    public resetMaxConnectionsPercent() {
        this._maxConnectionsPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConnectionsPercentInput() {
        return this._maxConnectionsPercent;
    }

    // max_idle_connections_percent - computed: true, optional: true, required: false
    private _maxIdleConnectionsPercent?: number; 
    public get maxIdleConnectionsPercent() {
        return this.getNumberAttribute('max_idle_connections_percent');
    }
    public set maxIdleConnectionsPercent(value: number) {
        this._maxIdleConnectionsPercent = value;
    }
    public resetMaxIdleConnectionsPercent() {
        this._maxIdleConnectionsPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIdleConnectionsPercentInput() {
        return this._maxIdleConnectionsPercent;
    }

    // session_pinning_filters - computed: true, optional: true, required: false
    private _sessionPinningFilters?: string[]; 
    public get sessionPinningFilters() {
        return this.getListAttribute('session_pinning_filters');
    }
    public set sessionPinningFilters(value: string[]) {
        this._sessionPinningFilters = value;
    }
    public resetSessionPinningFilters() {
        this._sessionPinningFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionPinningFiltersInput() {
        return this._sessionPinningFilters;
    }
}
}
