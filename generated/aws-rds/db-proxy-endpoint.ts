// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDBProxyEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#db_proxy_endpoint_name CcDBProxyEndpoint#db_proxy_endpoint_name}
    */
    readonly dbProxyEndpointName: string;
    /**
    * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#db_proxy_name CcDBProxyEndpoint#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#endpoint_network_type CcDBProxyEndpoint#endpoint_network_type}
    */
    readonly endpointNetworkType?: string;
    /**
    * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#tags CcDBProxyEndpoint#tags}
    */
    readonly tags?: CcDBProxyEndpoint.TagFormatProperty[] | cdktn.IResolvable;
    /**
    * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#target_role CcDBProxyEndpoint#target_role}
    */
    readonly targetRole?: string;
    /**
    * VPC security group IDs to associate with the new DB proxy endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#vpc_security_group_ids CcDBProxyEndpoint#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * VPC subnet IDs to associate with the new DB proxy endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#vpc_subnet_ids CcDBProxyEndpoint#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint awscc_rds_db_proxy_endpoint}
*/
export class CcDBProxyEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rds_db_proxy_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDBProxyEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDBProxyEndpoint to import
    * @param importFromId The id of the existing CcDBProxyEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDBProxyEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_proxy_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint awscc_rds_db_proxy_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDBProxyEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcDBProxyEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_db_proxy_endpoint',
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
        this._dbProxyEndpointName = config.dbProxyEndpointName;
        this._dbProxyName = config.dbProxyName;
        this._endpointNetworkType = config.endpointNetworkType;
        this._tags.internalValue = config.tags;
        this._targetRole = config.targetRole;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._vpcSubnetIds = config.vpcSubnetIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // db_proxy_endpoint_arn - computed: true, optional: false, required: false
    public get dbProxyEndpointArn() {
        return this.getStringAttribute('db_proxy_endpoint_arn');
    }

    // db_proxy_endpoint_name - computed: false, optional: false, required: true
    private _dbProxyEndpointName?: string; 
    public get dbProxyEndpointName() {
        return this.getStringAttribute('db_proxy_endpoint_name');
    }
    public set dbProxyEndpointName(value: string) {
        this._dbProxyEndpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbProxyEndpointNameInput() {
        return this._dbProxyEndpointName;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_default - computed: true, optional: false, required: false
    public get isDefault() {
        return this.getBooleanAttribute('is_default');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDBProxyEndpoint.TagFormatPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDBProxyEndpoint.TagFormatProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_role - computed: true, optional: true, required: false
    private _targetRole?: string; 
    public get targetRole() {
        return this.getStringAttribute('target_role');
    }
    public set targetRole(value: string) {
        this._targetRole = value;
    }
    public resetTargetRole() {
        this._targetRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRoleInput() {
        return this._targetRole;
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
            db_proxy_endpoint_name: cdktn.stringToTerraform(this._dbProxyEndpointName),
            db_proxy_name: cdktn.stringToTerraform(this._dbProxyName),
            endpoint_network_type: cdktn.stringToTerraform(this._endpointNetworkType),
            tags: cdktn.listMapper(ccDBProxyEndpointTagFormatPropertyToTerraform, false)(this._tags.internalValue),
            target_role: cdktn.stringToTerraform(this._targetRole),
            vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
            vpc_subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSubnetIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            db_proxy_endpoint_name: {
                value: cdktn.stringToHclTerraform(this._dbProxyEndpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_proxy_name: {
                value: cdktn.stringToHclTerraform(this._dbProxyName),
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
            tags: {
                value: cdktn.listMapperHcl(ccDBProxyEndpointTagFormatPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBProxyEndpoint.TagFormatPropertyList",
            },
            target_role: {
                value: cdktn.stringToHclTerraform(this._targetRole),
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

export function ccDBProxyEndpointTagFormatPropertyToTerraform(struct?: CcDBProxyEndpoint.TagFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDBProxyEndpointTagFormatPropertyToHclTerraform(struct?: CcDBProxyEndpoint.TagFormatProperty | cdktn.IResolvable): any {
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


export namespace CcDBProxyEndpoint {
export interface TagFormatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#key CcDBProxyEndpoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy_endpoint#value CcDBProxyEndpoint#value}
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
