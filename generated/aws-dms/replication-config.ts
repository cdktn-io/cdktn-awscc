// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReplicationConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration parameters for provisioning a AWS DMS Serverless replication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#compute_config CcReplicationConfig#compute_config}
    */
    readonly computeConfig: CcReplicationConfig.ComputeConfigProperty;
    /**
    * A unique identifier of replication configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#replication_config_identifier CcReplicationConfig#replication_config_identifier}
    */
    readonly replicationConfigIdentifier: string;
    /**
    * JSON settings for Servereless replications that are provisioned using this replication configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#replication_settings CcReplicationConfig#replication_settings}
    */
    readonly replicationSettings?: string;
    /**
    * The type of AWS DMS Serverless replication to provision using this replication configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#replication_type CcReplicationConfig#replication_type}
    */
    readonly replicationType: string;
    /**
    * A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#resource_identifier CcReplicationConfig#resource_identifier}
    */
    readonly resourceIdentifier?: string;
    /**
    * The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#source_endpoint_arn CcReplicationConfig#source_endpoint_arn}
    */
    readonly sourceEndpointArn: string;
    /**
    * JSON settings for specifying supplemental data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#supplemental_settings CcReplicationConfig#supplemental_settings}
    */
    readonly supplementalSettings?: string;
    /**
    * JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#table_mappings CcReplicationConfig#table_mappings}
    */
    readonly tableMappings: string;
    /**
    * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#tags CcReplicationConfig#tags}
    */
    readonly tags?: CcReplicationConfig.TagProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#target_endpoint_arn CcReplicationConfig#target_endpoint_arn}
    */
    readonly targetEndpointArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config awscc_dms_replication_config}
*/
export class CcReplicationConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dms_replication_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReplicationConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReplicationConfig to import
    * @param importFromId The id of the existing CcReplicationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReplicationConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_replication_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config awscc_dms_replication_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReplicationConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcReplicationConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dms_replication_config',
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
        this._computeConfig.internalValue = config.computeConfig;
        this._replicationConfigIdentifier = config.replicationConfigIdentifier;
        this._replicationSettings = config.replicationSettings;
        this._replicationType = config.replicationType;
        this._resourceIdentifier = config.resourceIdentifier;
        this._sourceEndpointArn = config.sourceEndpointArn;
        this._supplementalSettings = config.supplementalSettings;
        this._tableMappings = config.tableMappings;
        this._tags.internalValue = config.tags;
        this._targetEndpointArn = config.targetEndpointArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // compute_config - computed: false, optional: false, required: true
    private _computeConfig = new CcReplicationConfig.ComputeConfigPropertyOutputReference(this, "compute_config");
    public get computeConfig() {
        return this._computeConfig;
    }
    public putComputeConfig(value: CcReplicationConfig.ComputeConfigProperty) {
        this._computeConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeConfigInput() {
        return this._computeConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // replication_config_arn - computed: true, optional: false, required: false
    public get replicationConfigArn() {
        return this.getStringAttribute('replication_config_arn');
    }

    // replication_config_identifier - computed: false, optional: false, required: true
    private _replicationConfigIdentifier?: string; 
    public get replicationConfigIdentifier() {
        return this.getStringAttribute('replication_config_identifier');
    }
    public set replicationConfigIdentifier(value: string) {
        this._replicationConfigIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationConfigIdentifierInput() {
        return this._replicationConfigIdentifier;
    }

    // replication_settings - computed: true, optional: true, required: false
    private _replicationSettings?: string; 
    public get replicationSettings() {
        return this.getStringAttribute('replication_settings');
    }
    public set replicationSettings(value: string) {
        this._replicationSettings = value;
    }
    public resetReplicationSettings() {
        this._replicationSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationSettingsInput() {
        return this._replicationSettings;
    }

    // replication_type - computed: false, optional: false, required: true
    private _replicationType?: string; 
    public get replicationType() {
        return this.getStringAttribute('replication_type');
    }
    public set replicationType(value: string) {
        this._replicationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationTypeInput() {
        return this._replicationType;
    }

    // resource_identifier - computed: true, optional: true, required: false
    private _resourceIdentifier?: string; 
    public get resourceIdentifier() {
        return this.getStringAttribute('resource_identifier');
    }
    public set resourceIdentifier(value: string) {
        this._resourceIdentifier = value;
    }
    public resetResourceIdentifier() {
        this._resourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdentifierInput() {
        return this._resourceIdentifier;
    }

    // source_endpoint_arn - computed: false, optional: false, required: true
    private _sourceEndpointArn?: string; 
    public get sourceEndpointArn() {
        return this.getStringAttribute('source_endpoint_arn');
    }
    public set sourceEndpointArn(value: string) {
        this._sourceEndpointArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEndpointArnInput() {
        return this._sourceEndpointArn;
    }

    // supplemental_settings - computed: true, optional: true, required: false
    private _supplementalSettings?: string; 
    public get supplementalSettings() {
        return this.getStringAttribute('supplemental_settings');
    }
    public set supplementalSettings(value: string) {
        this._supplementalSettings = value;
    }
    public resetSupplementalSettings() {
        this._supplementalSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supplementalSettingsInput() {
        return this._supplementalSettings;
    }

    // table_mappings - computed: false, optional: false, required: true
    private _tableMappings?: string; 
    public get tableMappings() {
        return this.getStringAttribute('table_mappings');
    }
    public set tableMappings(value: string) {
        this._tableMappings = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableMappingsInput() {
        return this._tableMappings;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcReplicationConfig.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcReplicationConfig.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_endpoint_arn - computed: false, optional: false, required: true
    private _targetEndpointArn?: string; 
    public get targetEndpointArn() {
        return this.getStringAttribute('target_endpoint_arn');
    }
    public set targetEndpointArn(value: string) {
        this._targetEndpointArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetEndpointArnInput() {
        return this._targetEndpointArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            compute_config: ccReplicationConfigComputeConfigPropertyToTerraform(this._computeConfig.internalValue),
            replication_config_identifier: cdktn.stringToTerraform(this._replicationConfigIdentifier),
            replication_settings: cdktn.stringToTerraform(this._replicationSettings),
            replication_type: cdktn.stringToTerraform(this._replicationType),
            resource_identifier: cdktn.stringToTerraform(this._resourceIdentifier),
            source_endpoint_arn: cdktn.stringToTerraform(this._sourceEndpointArn),
            supplemental_settings: cdktn.stringToTerraform(this._supplementalSettings),
            table_mappings: cdktn.stringToTerraform(this._tableMappings),
            tags: cdktn.listMapper(ccReplicationConfigTagPropertyToTerraform, false)(this._tags.internalValue),
            target_endpoint_arn: cdktn.stringToTerraform(this._targetEndpointArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            compute_config: {
                value: ccReplicationConfigComputeConfigPropertyToHclTerraform(this._computeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReplicationConfig.ComputeConfigProperty",
            },
            replication_config_identifier: {
                value: cdktn.stringToHclTerraform(this._replicationConfigIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_settings: {
                value: cdktn.stringToHclTerraform(this._replicationSettings),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_type: {
                value: cdktn.stringToHclTerraform(this._replicationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_identifier: {
                value: cdktn.stringToHclTerraform(this._resourceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_endpoint_arn: {
                value: cdktn.stringToHclTerraform(this._sourceEndpointArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            supplemental_settings: {
                value: cdktn.stringToHclTerraform(this._supplementalSettings),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            table_mappings: {
                value: cdktn.stringToHclTerraform(this._tableMappings),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccReplicationConfigTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcReplicationConfig.TagPropertyList",
            },
            target_endpoint_arn: {
                value: cdktn.stringToHclTerraform(this._targetEndpointArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReplicationConfigComputeConfigPropertyToTerraform(struct?: CcReplicationConfig.ComputeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        dns_name_servers: cdktn.stringToTerraform(struct!.dnsNameServers),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        max_capacity_units: cdktn.numberToTerraform(struct!.maxCapacityUnits),
        min_capacity_units: cdktn.numberToTerraform(struct!.minCapacityUnits),
        multi_az: cdktn.booleanToTerraform(struct!.multiAz),
        preferred_maintenance_window: cdktn.stringToTerraform(struct!.preferredMaintenanceWindow),
        replication_subnet_group_id: cdktn.stringToTerraform(struct!.replicationSubnetGroupId),
        vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcSecurityGroupIds),
    }
}


export function ccReplicationConfigComputeConfigPropertyToHclTerraform(struct?: CcReplicationConfig.ComputeConfigProperty | cdktn.IResolvable): any {
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
        dns_name_servers: {
            value: cdktn.stringToHclTerraform(struct!.dnsNameServers),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.minCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        multi_az: {
            value: cdktn.booleanToHclTerraform(struct!.multiAz),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preferred_maintenance_window: {
            value: cdktn.stringToHclTerraform(struct!.preferredMaintenanceWindow),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replication_subnet_group_id: {
            value: cdktn.stringToHclTerraform(struct!.replicationSubnetGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcSecurityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationConfigTagPropertyToTerraform(struct?: CcReplicationConfig.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReplicationConfigTagPropertyToHclTerraform(struct?: CcReplicationConfig.TagProperty | cdktn.IResolvable): any {
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


export namespace CcReplicationConfig {
export interface ComputeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#availability_zone CcReplicationConfig#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#dns_name_servers CcReplicationConfig#dns_name_servers}
    */
    readonly dnsNameServers?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#kms_key_id CcReplicationConfig#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#max_capacity_units CcReplicationConfig#max_capacity_units}
    */
    readonly maxCapacityUnits: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#min_capacity_units CcReplicationConfig#min_capacity_units}
    */
    readonly minCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#multi_az CcReplicationConfig#multi_az}
    */
    readonly multiAz?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#preferred_maintenance_window CcReplicationConfig#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#replication_subnet_group_id CcReplicationConfig#replication_subnet_group_id}
    */
    readonly replicationSubnetGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#vpc_security_group_ids CcReplicationConfig#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
}
export class ComputeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._dnsNameServers !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsNameServers = this._dnsNameServers;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._maxCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacityUnits = this._maxCapacityUnits;
        }
        if (this._minCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacityUnits = this._minCapacityUnits;
        }
        if (this._multiAz !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiAz = this._multiAz;
        }
        if (this._preferredMaintenanceWindow !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferredMaintenanceWindow = this._preferredMaintenanceWindow;
        }
        if (this._replicationSubnetGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicationSubnetGroupId = this._replicationSubnetGroupId;
        }
        if (this._vpcSecurityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcSecurityGroupIds = this._vpcSecurityGroupIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._dnsNameServers = undefined;
            this._kmsKeyId = undefined;
            this._maxCapacityUnits = undefined;
            this._minCapacityUnits = undefined;
            this._multiAz = undefined;
            this._preferredMaintenanceWindow = undefined;
            this._replicationSubnetGroupId = undefined;
            this._vpcSecurityGroupIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._dnsNameServers = value.dnsNameServers;
            this._kmsKeyId = value.kmsKeyId;
            this._maxCapacityUnits = value.maxCapacityUnits;
            this._minCapacityUnits = value.minCapacityUnits;
            this._multiAz = value.multiAz;
            this._preferredMaintenanceWindow = value.preferredMaintenanceWindow;
            this._replicationSubnetGroupId = value.replicationSubnetGroupId;
            this._vpcSecurityGroupIds = value.vpcSecurityGroupIds;
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

    // dns_name_servers - computed: true, optional: true, required: false
    private _dnsNameServers?: string; 
    public get dnsNameServers() {
        return this.getStringAttribute('dns_name_servers');
    }
    public set dnsNameServers(value: string) {
        this._dnsNameServers = value;
    }
    public resetDnsNameServers() {
        this._dnsNameServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsNameServersInput() {
        return this._dnsNameServers;
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

    // max_capacity_units - computed: false, optional: false, required: true
    private _maxCapacityUnits?: number; 
    public get maxCapacityUnits() {
        return this.getNumberAttribute('max_capacity_units');
    }
    public set maxCapacityUnits(value: number) {
        this._maxCapacityUnits = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityUnitsInput() {
        return this._maxCapacityUnits;
    }

    // min_capacity_units - computed: true, optional: true, required: false
    private _minCapacityUnits?: number; 
    public get minCapacityUnits() {
        return this.getNumberAttribute('min_capacity_units');
    }
    public set minCapacityUnits(value: number) {
        this._minCapacityUnits = value;
    }
    public resetMinCapacityUnits() {
        this._minCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityUnitsInput() {
        return this._minCapacityUnits;
    }

    // multi_az - computed: true, optional: true, required: false
    private _multiAz?: boolean | cdktn.IResolvable; 
    public get multiAz() {
        return this.getBooleanAttribute('multi_az');
    }
    public set multiAz(value: boolean | cdktn.IResolvable) {
        this._multiAz = value;
    }
    public resetMultiAz() {
        this._multiAz = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAzInput() {
        return this._multiAz;
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

    // replication_subnet_group_id - computed: true, optional: true, required: false
    private _replicationSubnetGroupId?: string; 
    public get replicationSubnetGroupId() {
        return this.getStringAttribute('replication_subnet_group_id');
    }
    public set replicationSubnetGroupId(value: string) {
        this._replicationSubnetGroupId = value;
    }
    public resetReplicationSubnetGroupId() {
        this._replicationSubnetGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationSubnetGroupIdInput() {
        return this._replicationSubnetGroupId;
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
}
export interface TagProperty {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#key CcReplicationConfig#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_replication_config#value CcReplicationConfig#value}
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
