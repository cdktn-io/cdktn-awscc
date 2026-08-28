// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDBInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#allow_major_version_upgrade CcDBInstance#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktn.IResolvable;
    /**
    * Indicates that minor version patches are applied automatically.
    * 
    * When updating this property, some interruptions may occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#auto_minor_version_upgrade CcDBInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
    /**
    * Specifies the name of the Availability Zone the DB instance is located in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#availability_zone CcDBInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#db_cluster_identifier CcDBInstance#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * Contains the name of the compute and memory capacity class of the DB instance.
    * 
    * If you update this property, some interruptions may occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#db_instance_class CcDBInstance#db_instance_class}
    */
    readonly dbInstanceClass: string;
    /**
    * Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#db_instance_identifier CcDBInstance#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * The name of an existing DB parameter group or a reference to an AWS::Neptune::DBParameterGroup resource created in the template. If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#db_parameter_group_name CcDBInstance#db_parameter_group_name}
    */
    readonly dbParameterGroupName?: string;
    /**
    * This parameter is not supported.
    * 
    * `AWS::Neptune::DBInstance` does not support restoring from snapshots.
    * 
    * `AWS::Neptune::DBCluster` does support restoring from snapshots.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#db_snapshot_identifier CcDBInstance#db_snapshot_identifier}
    */
    readonly dbSnapshotIdentifier?: string;
    /**
    * A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new virtual private cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#db_subnet_group_name CcDBInstance#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#preferred_maintenance_window CcDBInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Indicates that public accessibility is enabled. This should be enabled in combination with IAM Auth enabled on the DBCluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#publicly_accessible CcDBInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * An arbitrary set of tags (key-value pairs) for this DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#tags CcDBInstance#tags}
    */
    readonly tags?: CcDBInstance.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance awscc_neptune_db_instance}
*/
export class CcDBInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_neptune_db_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDBInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDBInstance to import
    * @param importFromId The id of the existing CcDBInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDBInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_neptune_db_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance awscc_neptune_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDBInstanceProps
    */
    public constructor(scope: Construct, id: string, config: CcDBInstanceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_neptune_db_instance',
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
        this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
        this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        this._availabilityZone = config.availabilityZone;
        this._dbClusterIdentifier = config.dbClusterIdentifier;
        this._dbInstanceClass = config.dbInstanceClass;
        this._dbInstanceIdentifier = config.dbInstanceIdentifier;
        this._dbParameterGroupName = config.dbParameterGroupName;
        this._dbSnapshotIdentifier = config.dbSnapshotIdentifier;
        this._dbSubnetGroupName = config.dbSubnetGroupName;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._publiclyAccessible = config.publiclyAccessible;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_major_version_upgrade - computed: true, optional: true, required: false
    private _allowMajorVersionUpgrade?: boolean | cdktn.IResolvable; 
    public get allowMajorVersionUpgrade() {
        return this.getBooleanAttribute('allow_major_version_upgrade');
    }
    public set allowMajorVersionUpgrade(value: boolean | cdktn.IResolvable) {
        this._allowMajorVersionUpgrade = value;
    }
    public resetAllowMajorVersionUpgrade() {
        this._allowMajorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowMajorVersionUpgradeInput() {
        return this._allowMajorVersionUpgrade;
    }

    // auto_minor_version_upgrade - computed: true, optional: true, required: false
    private _autoMinorVersionUpgrade?: boolean | cdktn.IResolvable; 
    public get autoMinorVersionUpgrade() {
        return this.getBooleanAttribute('auto_minor_version_upgrade');
    }
    public set autoMinorVersionUpgrade(value: boolean | cdktn.IResolvable) {
        this._autoMinorVersionUpgrade = value;
    }
    public resetAutoMinorVersionUpgrade() {
        this._autoMinorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoMinorVersionUpgradeInput() {
        return this._autoMinorVersionUpgrade;
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

    // db_cluster_identifier - computed: true, optional: true, required: false
    private _dbClusterIdentifier?: string; 
    public get dbClusterIdentifier() {
        return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string) {
        this._dbClusterIdentifier = value;
    }
    public resetDbClusterIdentifier() {
        this._dbClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
        return this._dbClusterIdentifier;
    }

    // db_instance_class - computed: false, optional: false, required: true
    private _dbInstanceClass?: string; 
    public get dbInstanceClass() {
        return this.getStringAttribute('db_instance_class');
    }
    public set dbInstanceClass(value: string) {
        this._dbInstanceClass = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceClassInput() {
        return this._dbInstanceClass;
    }

    // db_instance_identifier - computed: true, optional: true, required: false
    private _dbInstanceIdentifier?: string; 
    public get dbInstanceIdentifier() {
        return this.getStringAttribute('db_instance_identifier');
    }
    public set dbInstanceIdentifier(value: string) {
        this._dbInstanceIdentifier = value;
    }
    public resetDbInstanceIdentifier() {
        this._dbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifierInput() {
        return this._dbInstanceIdentifier;
    }

    // db_parameter_group_name - computed: true, optional: true, required: false
    private _dbParameterGroupName?: string; 
    public get dbParameterGroupName() {
        return this.getStringAttribute('db_parameter_group_name');
    }
    public set dbParameterGroupName(value: string) {
        this._dbParameterGroupName = value;
    }
    public resetDbParameterGroupName() {
        this._dbParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbParameterGroupNameInput() {
        return this._dbParameterGroupName;
    }

    // db_snapshot_identifier - computed: true, optional: true, required: false
    private _dbSnapshotIdentifier?: string; 
    public get dbSnapshotIdentifier() {
        return this.getStringAttribute('db_snapshot_identifier');
    }
    public set dbSnapshotIdentifier(value: string) {
        this._dbSnapshotIdentifier = value;
    }
    public resetDbSnapshotIdentifier() {
        this._dbSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSnapshotIdentifierInput() {
        return this._dbSnapshotIdentifier;
    }

    // db_subnet_group_name - computed: true, optional: true, required: false
    private _dbSubnetGroupName?: string; 
    public get dbSubnetGroupName() {
        return this.getStringAttribute('db_subnet_group_name');
    }
    public set dbSubnetGroupName(value: string) {
        this._dbSubnetGroupName = value;
    }
    public resetDbSubnetGroupName() {
        this._dbSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSubnetGroupNameInput() {
        return this._dbSubnetGroupName;
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getStringAttribute('port');
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string; 
    public get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string) {
        this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
        this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
        return this._preferredMaintenanceWindow;
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
    private _tags = new CcDBInstance.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDBInstance.TagProperty[] | cdktn.IResolvable) {
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
            allow_major_version_upgrade: cdktn.booleanToTerraform(this._allowMajorVersionUpgrade),
            auto_minor_version_upgrade: cdktn.booleanToTerraform(this._autoMinorVersionUpgrade),
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            db_cluster_identifier: cdktn.stringToTerraform(this._dbClusterIdentifier),
            db_instance_class: cdktn.stringToTerraform(this._dbInstanceClass),
            db_instance_identifier: cdktn.stringToTerraform(this._dbInstanceIdentifier),
            db_parameter_group_name: cdktn.stringToTerraform(this._dbParameterGroupName),
            db_snapshot_identifier: cdktn.stringToTerraform(this._dbSnapshotIdentifier),
            db_subnet_group_name: cdktn.stringToTerraform(this._dbSubnetGroupName),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            tags: cdktn.listMapper(ccDBInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allow_major_version_upgrade: {
                value: cdktn.booleanToHclTerraform(this._allowMajorVersionUpgrade),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_minor_version_upgrade: {
                value: cdktn.booleanToHclTerraform(this._autoMinorVersionUpgrade),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._dbClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_instance_class: {
                value: cdktn.stringToHclTerraform(this._dbInstanceClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_instance_identifier: {
                value: cdktn.stringToHclTerraform(this._dbInstanceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._dbParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_snapshot_identifier: {
                value: cdktn.stringToHclTerraform(this._dbSnapshotIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_subnet_group_name: {
                value: cdktn.stringToHclTerraform(this._dbSubnetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_maintenance_window: {
                value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publicly_accessible: {
                value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDBInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDBInstance.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDBInstanceTagPropertyToTerraform(struct?: CcDBInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDBInstanceTagPropertyToHclTerraform(struct?: CcDBInstance.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDBInstance {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#key CcDBInstance#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_instance#value CcDBInstance#value}
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
