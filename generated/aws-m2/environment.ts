// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#description CcEnvironment#description}
    */
    readonly description?: string;
    /**
    * The target platform for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#engine_type CcEnvironment#engine_type}
    */
    readonly engineType: string;
    /**
    * The version of the runtime engine for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#engine_version CcEnvironment#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Defines the details of a high availability configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#high_availability_config CcEnvironment#high_availability_config}
    */
    readonly highAvailabilityConfig?: CcEnvironment.HighAvailabilityConfigProperty;
    /**
    * The type of instance underlying the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#instance_type CcEnvironment#instance_type}
    */
    readonly instanceType: string;
    /**
    * The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#kms_key_id CcEnvironment#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#name CcEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#network_type CcEnvironment#network_type}
    */
    readonly networkType?: string;
    /**
    * Configures a desired maintenance window for the environment. If you do not provide a value, a random system-generated value will be assigned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#preferred_maintenance_window CcEnvironment#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Specifies whether the environment is publicly accessible.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#publicly_accessible CcEnvironment#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * The list of security groups for the VPC associated with this environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#security_group_ids CcEnvironment#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The storage configurations defined for the runtime environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#storage_configurations CcEnvironment#storage_configurations}
    */
    readonly storageConfigurations?: CcEnvironment.StorageConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The unique identifiers of the subnets assigned to this runtime environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#subnet_ids CcEnvironment#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Tags associated to this environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#tags CcEnvironment#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment awscc_m2_environment}
*/
export class CcEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_m2_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironment to import
    * @param importFromId The id of the existing CcEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_m2_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment awscc_m2_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_m2_environment',
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
        this._description = config.description;
        this._engineType = config.engineType;
        this._engineVersion = config.engineVersion;
        this._highAvailabilityConfig.internalValue = config.highAvailabilityConfig;
        this._instanceType = config.instanceType;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._networkType = config.networkType;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._publiclyAccessible = config.publiclyAccessible;
        this._securityGroupIds = config.securityGroupIds;
        this._storageConfigurations.internalValue = config.storageConfigurations;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // engine_type - computed: false, optional: false, required: true
    private _engineType?: string; 
    public get engineType() {
        return this.getStringAttribute('engine_type');
    }
    public set engineType(value: string) {
        this._engineType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineTypeInput() {
        return this._engineType;
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string; 
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string) {
        this._engineVersion = value;
    }
    public resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion;
    }

    // environment_arn - computed: true, optional: false, required: false
    public get environmentArn() {
        return this.getStringAttribute('environment_arn');
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // high_availability_config - computed: true, optional: true, required: false
    private _highAvailabilityConfig = new CcEnvironment.HighAvailabilityConfigPropertyOutputReference(this, "high_availability_config");
    public get highAvailabilityConfig() {
        return this._highAvailabilityConfig;
    }
    public putHighAvailabilityConfig(value: CcEnvironment.HighAvailabilityConfigProperty) {
        this._highAvailabilityConfig.internalValue = value;
    }
    public resetHighAvailabilityConfig() {
        this._highAvailabilityConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get highAvailabilityConfigInput() {
        return this._highAvailabilityConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
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

    // network_type - computed: true, optional: true, required: false
    private _networkType?: string; 
    public get networkType() {
        return this.getStringAttribute('network_type');
    }
    public set networkType(value: string) {
        this._networkType = value;
    }
    public resetNetworkType() {
        this._networkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkTypeInput() {
        return this._networkType;
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

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // storage_configurations - computed: true, optional: true, required: false
    private _storageConfigurations = new CcEnvironment.StorageConfigurationPropertyList(this, "storage_configurations", false);
    public get storageConfigurations() {
        return this._storageConfigurations;
    }
    public putStorageConfigurations(value: CcEnvironment.StorageConfigurationProperty[] | cdktn.IResolvable) {
        this._storageConfigurations.internalValue = value;
    }
    public resetStorageConfigurations() {
        this._storageConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigurationsInput() {
        return this._storageConfigurations.internalValue;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            engine_type: cdktn.stringToTerraform(this._engineType),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            high_availability_config: ccEnvironmentHighAvailabilityConfigPropertyToTerraform(this._highAvailabilityConfig.internalValue),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            name: cdktn.stringToTerraform(this._name),
            network_type: cdktn.stringToTerraform(this._networkType),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            storage_configurations: cdktn.listMapper(ccEnvironmentStorageConfigurationPropertyToTerraform, false)(this._storageConfigurations.internalValue),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_type: {
                value: cdktn.stringToHclTerraform(this._engineType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            high_availability_config: {
                value: ccEnvironmentHighAvailabilityConfigPropertyToHclTerraform(this._highAvailabilityConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.HighAvailabilityConfigProperty",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
            network_type: {
                value: cdktn.stringToHclTerraform(this._networkType),
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
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            storage_configurations: {
                value: cdktn.listMapperHcl(ccEnvironmentStorageConfigurationPropertyToHclTerraform, false)(this._storageConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironment.StorageConfigurationPropertyList",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentHighAvailabilityConfigPropertyToTerraform(struct?: CcEnvironment.HighAvailabilityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        desired_capacity: cdktn.numberToTerraform(struct!.desiredCapacity),
    }
}


export function ccEnvironmentHighAvailabilityConfigPropertyToHclTerraform(struct?: CcEnvironment.HighAvailabilityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        desired_capacity: {
            value: cdktn.numberToHclTerraform(struct!.desiredCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentEfsStorageConfigurationPropertyToTerraform(struct?: CcEnvironment.EfsStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        mount_point: cdktn.stringToTerraform(struct!.mountPoint),
    }
}


export function ccEnvironmentEfsStorageConfigurationPropertyToHclTerraform(struct?: CcEnvironment.EfsStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_point: {
            value: cdktn.stringToHclTerraform(struct!.mountPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentFsxStorageConfigurationPropertyToTerraform(struct?: CcEnvironment.FsxStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        mount_point: cdktn.stringToTerraform(struct!.mountPoint),
    }
}


export function ccEnvironmentFsxStorageConfigurationPropertyToHclTerraform(struct?: CcEnvironment.FsxStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_point: {
            value: cdktn.stringToHclTerraform(struct!.mountPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentStorageConfigurationPropertyToTerraform(struct?: CcEnvironment.StorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        efs: ccEnvironmentEfsStorageConfigurationPropertyToTerraform(struct!.efs),
        fsx: ccEnvironmentFsxStorageConfigurationPropertyToTerraform(struct!.fsx),
    }
}


export function ccEnvironmentStorageConfigurationPropertyToHclTerraform(struct?: CcEnvironment.StorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        efs: {
            value: ccEnvironmentEfsStorageConfigurationPropertyToHclTerraform(struct!.efs),
            isBlock: true,
            type: "struct",
            storageClassType: "EfsStorageConfigurationProperty",
        },
        fsx: {
            value: ccEnvironmentFsxStorageConfigurationPropertyToHclTerraform(struct!.fsx),
            isBlock: true,
            type: "struct",
            storageClassType: "FsxStorageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEnvironment {
export interface HighAvailabilityConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#desired_capacity CcEnvironment#desired_capacity}
    */
    readonly desiredCapacity?: number;
}
export class HighAvailabilityConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HighAvailabilityConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._desiredCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.desiredCapacity = this._desiredCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HighAvailabilityConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._desiredCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._desiredCapacity = value.desiredCapacity;
        }
    }

    // desired_capacity - computed: true, optional: true, required: false
    private _desiredCapacity?: number; 
    public get desiredCapacity() {
        return this.getNumberAttribute('desired_capacity');
    }
    public set desiredCapacity(value: number) {
        this._desiredCapacity = value;
    }
    public resetDesiredCapacity() {
        this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCapacityInput() {
        return this._desiredCapacity;
    }
}
export interface EfsStorageConfigurationProperty {
    /**
    * The file system identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#file_system_id CcEnvironment#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * The mount point for the file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#mount_point CcEnvironment#mount_point}
    */
    readonly mountPoint?: string;
}
export class EfsStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EfsStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._mountPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPoint = this._mountPoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EfsStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._mountPoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._mountPoint = value.mountPoint;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // mount_point - computed: true, optional: true, required: false
    private _mountPoint?: string; 
    public get mountPoint() {
        return this.getStringAttribute('mount_point');
    }
    public set mountPoint(value: string) {
        this._mountPoint = value;
    }
    public resetMountPoint() {
        this._mountPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPointInput() {
        return this._mountPoint;
    }
}
export interface FsxStorageConfigurationProperty {
    /**
    * The file system identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#file_system_id CcEnvironment#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * The mount point for the file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#mount_point CcEnvironment#mount_point}
    */
    readonly mountPoint?: string;
}
export class FsxStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FsxStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._mountPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPoint = this._mountPoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FsxStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemId = undefined;
            this._mountPoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemId = value.fileSystemId;
            this._mountPoint = value.mountPoint;
        }
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // mount_point - computed: true, optional: true, required: false
    private _mountPoint?: string; 
    public get mountPoint() {
        return this.getStringAttribute('mount_point');
    }
    public set mountPoint(value: string) {
        this._mountPoint = value;
    }
    public resetMountPoint() {
        this._mountPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPointInput() {
        return this._mountPoint;
    }
}
export interface StorageConfigurationProperty {
    /**
    * Defines the storage configuration for an Amazon EFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#efs CcEnvironment#efs}
    */
    readonly efs?: EfsStorageConfigurationProperty;
    /**
    * Defines the storage configuration for an Amazon FSx file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/m2_environment#fsx CcEnvironment#fsx}
    */
    readonly fsx?: FsxStorageConfigurationProperty;
}
export class StorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._efs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efs = this._efs?.internalValue;
        }
        if (this._fsx?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsx = this._fsx?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._efs.internalValue = undefined;
            this._fsx.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._efs.internalValue = value.efs;
            this._fsx.internalValue = value.fsx;
        }
    }

    // efs - computed: true, optional: true, required: false
    private _efs = new EfsStorageConfigurationPropertyOutputReference(this, "efs");
    public get efs() {
        return this._efs;
    }
    public putEfs(value: EfsStorageConfigurationProperty) {
        this._efs.internalValue = value;
    }
    public resetEfs() {
        this._efs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsInput() {
        return this._efs.internalValue;
    }

    // fsx - computed: true, optional: true, required: false
    private _fsx = new FsxStorageConfigurationPropertyOutputReference(this, "fsx");
    public get fsx() {
        return this._fsx;
    }
    public putFsx(value: FsxStorageConfigurationProperty) {
        this._fsx.internalValue = value;
    }
    public resetFsx() {
        this._fsx.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxInput() {
        return this._fsx.internalValue;
    }
}

export class StorageConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : StorageConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): StorageConfigurationPropertyOutputReference {
        return new StorageConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
