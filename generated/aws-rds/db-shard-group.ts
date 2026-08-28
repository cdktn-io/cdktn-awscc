// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDBShardGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies whether to create standby standby DB data access shard for the DB shard group. Valid values are the following:
    *   +  0 - Creates a DB shard group without a standby DB data access shard. This is the default value.
    *   +  1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).
    *   +  2 - Creates a DB shard group with two standby DB data access shard in two different AZs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#compute_redundancy CcDBShardGroup#compute_redundancy}
    */
    readonly computeRedundancy?: number;
    /**
    * The name of the primary DB cluster for the DB shard group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#db_cluster_identifier CcDBShardGroup#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * The name of the DB shard group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#db_shard_group_identifier CcDBShardGroup#db_shard_group_identifier}
    */
    readonly dbShardGroupIdentifier?: string;
    /**
    * The maximum capacity of the DB shard group in Aurora capacity units (ACUs).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#max_acu CcDBShardGroup#max_acu}
    */
    readonly maxAcu: number;
    /**
    * The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#min_acu CcDBShardGroup#min_acu}
    */
    readonly minAcu?: number;
    /**
    * Specifies whether the DB shard group is publicly accessible.
    *  When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
    *  When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
    *  Default: The default behavior varies depending on whether ``DBSubnetGroupName`` is specified.
    *  If ``DBSubnetGroupName`` isn't specified, and ``PubliclyAccessible`` isn't specified, the following applies:
    *   +  If the default VPC in the target Region doesn?t have an internet gateway attached to it, the DB shard group is private.
    *   +  If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.
    *   
    *  If ``DBSubnetGroupName`` is specified, and ``PubliclyAccessible`` isn't specified, the following applies:
    *   +  If the subnets are part of a VPC that doesn?t have an internet gateway attached to it, the DB shard group is private.
    *   +  If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#publicly_accessible CcDBShardGroup#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#tags CcDBShardGroup#tags}
    */
    readonly tags?: CcDBShardGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group awscc_rds_db_shard_group}
*/
export class CcDBShardGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rds_db_shard_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDBShardGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDBShardGroup to import
    * @param importFromId The id of the existing CcDBShardGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDBShardGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_shard_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group awscc_rds_db_shard_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDBShardGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcDBShardGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_db_shard_group',
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
        this._computeRedundancy = config.computeRedundancy;
        this._dbClusterIdentifier = config.dbClusterIdentifier;
        this._dbShardGroupIdentifier = config.dbShardGroupIdentifier;
        this._maxAcu = config.maxAcu;
        this._minAcu = config.minAcu;
        this._publiclyAccessible = config.publiclyAccessible;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // compute_redundancy - computed: true, optional: true, required: false
    private _computeRedundancy?: number; 
    public get computeRedundancy() {
        return this.getNumberAttribute('compute_redundancy');
    }
    public set computeRedundancy(value: number) {
        this._computeRedundancy = value;
    }
    public resetComputeRedundancy() {
        this._computeRedundancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeRedundancyInput() {
        return this._computeRedundancy;
    }

    // db_cluster_identifier - computed: false, optional: false, required: true
    private _dbClusterIdentifier?: string; 
    public get dbClusterIdentifier() {
        return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string) {
        this._dbClusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
        return this._dbClusterIdentifier;
    }

    // db_shard_group_identifier - computed: true, optional: true, required: false
    private _dbShardGroupIdentifier?: string; 
    public get dbShardGroupIdentifier() {
        return this.getStringAttribute('db_shard_group_identifier');
    }
    public set dbShardGroupIdentifier(value: string) {
        this._dbShardGroupIdentifier = value;
    }
    public resetDbShardGroupIdentifier() {
        this._dbShardGroupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbShardGroupIdentifierInput() {
        return this._dbShardGroupIdentifier;
    }

    // db_shard_group_resource_id - computed: true, optional: false, required: false
    public get dbShardGroupResourceId() {
        return this.getStringAttribute('db_shard_group_resource_id');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_acu - computed: false, optional: false, required: true
    private _maxAcu?: number; 
    public get maxAcu() {
        return this.getNumberAttribute('max_acu');
    }
    public set maxAcu(value: number) {
        this._maxAcu = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAcuInput() {
        return this._maxAcu;
    }

    // min_acu - computed: true, optional: true, required: false
    private _minAcu?: number; 
    public get minAcu() {
        return this.getNumberAttribute('min_acu');
    }
    public set minAcu(value: number) {
        this._minAcu = value;
    }
    public resetMinAcu() {
        this._minAcu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minAcuInput() {
        return this._minAcu;
    }

    // publicly_accessible - computed: true, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktn.IResolvable; 
    public get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    public set publiclyAccessible(value: boolean | cdktn.IResolvable) {
        this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
        this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
        return this._publiclyAccessible;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDBShardGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDBShardGroup.TagProperty[] | cdktn.IResolvable) {
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
            compute_redundancy: cdktn.numberToTerraform(this._computeRedundancy),
            db_cluster_identifier: cdktn.stringToTerraform(this._dbClusterIdentifier),
            db_shard_group_identifier: cdktn.stringToTerraform(this._dbShardGroupIdentifier),
            max_acu: cdktn.numberToTerraform(this._maxAcu),
            min_acu: cdktn.numberToTerraform(this._minAcu),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            tags: cdktn.listMapper(ccDBShardGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            compute_redundancy: {
                value: cdktn.numberToHclTerraform(this._computeRedundancy),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            db_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._dbClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_shard_group_identifier: {
                value: cdktn.stringToHclTerraform(this._dbShardGroupIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_acu: {
                value: cdktn.numberToHclTerraform(this._maxAcu),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_acu: {
                value: cdktn.numberToHclTerraform(this._minAcu),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            publicly_accessible: {
                value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDBShardGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDBShardGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDBShardGroupTagPropertyToTerraform(struct?: CcDBShardGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDBShardGroupTagPropertyToHclTerraform(struct?: CcDBShardGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDBShardGroup {
export interface TagProperty {
    /**
    * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#key CcDBShardGroup#key}
    */
    readonly key?: string;
    /**
    * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_shard_group#value CcDBShardGroup#value}
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
