// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReplicationConfigurationTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#associate_default_security_group CcReplicationConfigurationTemplate#associate_default_security_group}
    */
    readonly associateDefaultSecurityGroup?: boolean | cdktn.IResolvable;
    /**
    * Whether to allow the AWS replication agent to automatically replicate newly added disks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks CcReplicationConfigurationTemplate#auto_replicate_new_disks}
    */
    readonly autoReplicateNewDisks?: boolean | cdktn.IResolvable;
    /**
    * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling CcReplicationConfigurationTemplate#bandwidth_throttling}
    */
    readonly bandwidthThrottling: number;
    /**
    * Whether to create a Public IP for the Recovery Instance by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#create_public_ip CcReplicationConfigurationTemplate#create_public_ip}
    */
    readonly createPublicIp?: boolean | cdktn.IResolvable;
    /**
    * The data plane routing mechanism that will be used for replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#data_plane_routing CcReplicationConfigurationTemplate#data_plane_routing}
    */
    readonly dataPlaneRouting?: string;
    /**
    * The Staging Disk EBS volume type to be used during replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type CcReplicationConfigurationTemplate#default_large_staging_disk_type}
    */
    readonly defaultLargeStagingDiskType?: string;
    /**
    * The type of EBS encryption to be used during replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption CcReplicationConfigurationTemplate#ebs_encryption}
    */
    readonly ebsEncryption: string;
    /**
    * The ARN of the EBS encryption key to be used during replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn CcReplicationConfigurationTemplate#ebs_encryption_key_arn}
    */
    readonly ebsEncryptionKeyArn?: string;
    /**
    * Which version of the Internet Protocol to use for replication of data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#internet_protocol CcReplicationConfigurationTemplate#internet_protocol}
    */
    readonly internetProtocol?: string;
    /**
    * The Point in time (PIT) policy to manage snapshots taken during replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#pit_policy CcReplicationConfigurationTemplate#pit_policy}
    */
    readonly pitPolicy: CcReplicationConfigurationTemplate.PitPolicyProperty[] | cdktn.IResolvable;
    /**
    * The instance type to be used for the replication server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type CcReplicationConfigurationTemplate#replication_server_instance_type}
    */
    readonly replicationServerInstanceType?: string;
    /**
    * The security group IDs that will be used by the replication server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_i_ds CcReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}
    */
    readonly replicationServersSecurityGroupsIDs: string[];
    /**
    * The subnet to be used by the replication staging area.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id CcReplicationConfigurationTemplate#staging_area_subnet_id}
    */
    readonly stagingAreaSubnetId: string;
    /**
    * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_tags CcReplicationConfigurationTemplate#staging_area_tags}
    */
    readonly stagingAreaTags: { [key: string]: string };
    /**
    * A set of tags to be associated with the Replication Configuration Template resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#tags CcReplicationConfigurationTemplate#tags}
    */
    readonly tags?: CcReplicationConfigurationTemplate.TagsProperty[] | cdktn.IResolvable;
    /**
    * Whether to use a dedicated Replication Server in the replication staging area.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server CcReplicationConfigurationTemplate#use_dedicated_replication_server}
    */
    readonly useDedicatedReplicationServer?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template awscc_drs_replication_configuration_template}
*/
export class CcReplicationConfigurationTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_drs_replication_configuration_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReplicationConfigurationTemplate to import
    * @param importFromId The id of the existing CcReplicationConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReplicationConfigurationTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_drs_replication_configuration_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template awscc_drs_replication_configuration_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReplicationConfigurationTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcReplicationConfigurationTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_drs_replication_configuration_template',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.103.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._associateDefaultSecurityGroup = config.associateDefaultSecurityGroup;
        this._autoReplicateNewDisks = config.autoReplicateNewDisks;
        this._bandwidthThrottling = config.bandwidthThrottling;
        this._createPublicIp = config.createPublicIp;
        this._dataPlaneRouting = config.dataPlaneRouting;
        this._defaultLargeStagingDiskType = config.defaultLargeStagingDiskType;
        this._ebsEncryption = config.ebsEncryption;
        this._ebsEncryptionKeyArn = config.ebsEncryptionKeyArn;
        this._internetProtocol = config.internetProtocol;
        this._pitPolicy.internalValue = config.pitPolicy;
        this._replicationServerInstanceType = config.replicationServerInstanceType;
        this._replicationServersSecurityGroupsIDs = config.replicationServersSecurityGroupsIDs;
        this._stagingAreaSubnetId = config.stagingAreaSubnetId;
        this._stagingAreaTags = config.stagingAreaTags;
        this._tags.internalValue = config.tags;
        this._useDedicatedReplicationServer = config.useDedicatedReplicationServer;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // associate_default_security_group - computed: true, optional: true, required: false
    private _associateDefaultSecurityGroup?: boolean | cdktn.IResolvable; 
    public get associateDefaultSecurityGroup() {
        return this.getBooleanAttribute('associate_default_security_group');
    }
    public set associateDefaultSecurityGroup(value: boolean | cdktn.IResolvable) {
        this._associateDefaultSecurityGroup = value;
    }
    public resetAssociateDefaultSecurityGroup() {
        this._associateDefaultSecurityGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associateDefaultSecurityGroupInput() {
        return this._associateDefaultSecurityGroup;
    }

    // auto_replicate_new_disks - computed: true, optional: true, required: false
    private _autoReplicateNewDisks?: boolean | cdktn.IResolvable; 
    public get autoReplicateNewDisks() {
        return this.getBooleanAttribute('auto_replicate_new_disks');
    }
    public set autoReplicateNewDisks(value: boolean | cdktn.IResolvable) {
        this._autoReplicateNewDisks = value;
    }
    public resetAutoReplicateNewDisks() {
        this._autoReplicateNewDisks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoReplicateNewDisksInput() {
        return this._autoReplicateNewDisks;
    }

    // bandwidth_throttling - computed: false, optional: false, required: true
    private _bandwidthThrottling?: number; 
    public get bandwidthThrottling() {
        return this.getNumberAttribute('bandwidth_throttling');
    }
    public set bandwidthThrottling(value: number) {
        this._bandwidthThrottling = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthThrottlingInput() {
        return this._bandwidthThrottling;
    }

    // create_public_ip - computed: true, optional: true, required: false
    private _createPublicIp?: boolean | cdktn.IResolvable; 
    public get createPublicIp() {
        return this.getBooleanAttribute('create_public_ip');
    }
    public set createPublicIp(value: boolean | cdktn.IResolvable) {
        this._createPublicIp = value;
    }
    public resetCreatePublicIp() {
        this._createPublicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createPublicIpInput() {
        return this._createPublicIp;
    }

    // data_plane_routing - computed: true, optional: true, required: false
    private _dataPlaneRouting?: string; 
    public get dataPlaneRouting() {
        return this.getStringAttribute('data_plane_routing');
    }
    public set dataPlaneRouting(value: string) {
        this._dataPlaneRouting = value;
    }
    public resetDataPlaneRouting() {
        this._dataPlaneRouting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataPlaneRoutingInput() {
        return this._dataPlaneRouting;
    }

    // default_large_staging_disk_type - computed: true, optional: true, required: false
    private _defaultLargeStagingDiskType?: string; 
    public get defaultLargeStagingDiskType() {
        return this.getStringAttribute('default_large_staging_disk_type');
    }
    public set defaultLargeStagingDiskType(value: string) {
        this._defaultLargeStagingDiskType = value;
    }
    public resetDefaultLargeStagingDiskType() {
        this._defaultLargeStagingDiskType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultLargeStagingDiskTypeInput() {
        return this._defaultLargeStagingDiskType;
    }

    // ebs_encryption - computed: false, optional: false, required: true
    private _ebsEncryption?: string; 
    public get ebsEncryption() {
        return this.getStringAttribute('ebs_encryption');
    }
    public set ebsEncryption(value: string) {
        this._ebsEncryption = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsEncryptionInput() {
        return this._ebsEncryption;
    }

    // ebs_encryption_key_arn - computed: true, optional: true, required: false
    private _ebsEncryptionKeyArn?: string; 
    public get ebsEncryptionKeyArn() {
        return this.getStringAttribute('ebs_encryption_key_arn');
    }
    public set ebsEncryptionKeyArn(value: string) {
        this._ebsEncryptionKeyArn = value;
    }
    public resetEbsEncryptionKeyArn() {
        this._ebsEncryptionKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsEncryptionKeyArnInput() {
        return this._ebsEncryptionKeyArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // internet_protocol - computed: true, optional: true, required: false
    private _internetProtocol?: string; 
    public get internetProtocol() {
        return this.getStringAttribute('internet_protocol');
    }
    public set internetProtocol(value: string) {
        this._internetProtocol = value;
    }
    public resetInternetProtocol() {
        this._internetProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internetProtocolInput() {
        return this._internetProtocol;
    }

    // pit_policy - computed: false, optional: false, required: true
    private _pitPolicy = new CcReplicationConfigurationTemplate.PitPolicyPropertyList(this, "pit_policy", false);
    public get pitPolicy() {
        return this._pitPolicy;
    }
    public putPitPolicy(value: CcReplicationConfigurationTemplate.PitPolicyProperty[] | cdktn.IResolvable) {
        this._pitPolicy.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pitPolicyInput() {
        return this._pitPolicy.internalValue;
    }

    // replication_configuration_template_id - computed: true, optional: false, required: false
    public get replicationConfigurationTemplateId() {
        return this.getStringAttribute('replication_configuration_template_id');
    }

    // replication_server_instance_type - computed: true, optional: true, required: false
    private _replicationServerInstanceType?: string; 
    public get replicationServerInstanceType() {
        return this.getStringAttribute('replication_server_instance_type');
    }
    public set replicationServerInstanceType(value: string) {
        this._replicationServerInstanceType = value;
    }
    public resetReplicationServerInstanceType() {
        this._replicationServerInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationServerInstanceTypeInput() {
        return this._replicationServerInstanceType;
    }

    // replication_servers_security_groups_i_ds - computed: false, optional: false, required: true
    private _replicationServersSecurityGroupsIDs?: string[]; 
    public get replicationServersSecurityGroupsIDs() {
        return this.getListAttribute('replication_servers_security_groups_i_ds');
    }
    public set replicationServersSecurityGroupsIDs(value: string[]) {
        this._replicationServersSecurityGroupsIDs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationServersSecurityGroupsIDsInput() {
        return this._replicationServersSecurityGroupsIDs;
    }

    // staging_area_subnet_id - computed: false, optional: false, required: true
    private _stagingAreaSubnetId?: string; 
    public get stagingAreaSubnetId() {
        return this.getStringAttribute('staging_area_subnet_id');
    }
    public set stagingAreaSubnetId(value: string) {
        this._stagingAreaSubnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stagingAreaSubnetIdInput() {
        return this._stagingAreaSubnetId;
    }

    // staging_area_tags - computed: false, optional: false, required: true
    private _stagingAreaTags?: { [key: string]: string }; 
    public get stagingAreaTags() {
        return this.getStringMapAttribute('staging_area_tags');
    }
    public set stagingAreaTags(value: { [key: string]: string }) {
        this._stagingAreaTags = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stagingAreaTagsInput() {
        return this._stagingAreaTags;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcReplicationConfigurationTemplate.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcReplicationConfigurationTemplate.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // use_dedicated_replication_server - computed: true, optional: true, required: false
    private _useDedicatedReplicationServer?: boolean | cdktn.IResolvable; 
    public get useDedicatedReplicationServer() {
        return this.getBooleanAttribute('use_dedicated_replication_server');
    }
    public set useDedicatedReplicationServer(value: boolean | cdktn.IResolvable) {
        this._useDedicatedReplicationServer = value;
    }
    public resetUseDedicatedReplicationServer() {
        this._useDedicatedReplicationServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useDedicatedReplicationServerInput() {
        return this._useDedicatedReplicationServer;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            associate_default_security_group: cdktn.booleanToTerraform(this._associateDefaultSecurityGroup),
            auto_replicate_new_disks: cdktn.booleanToTerraform(this._autoReplicateNewDisks),
            bandwidth_throttling: cdktn.numberToTerraform(this._bandwidthThrottling),
            create_public_ip: cdktn.booleanToTerraform(this._createPublicIp),
            data_plane_routing: cdktn.stringToTerraform(this._dataPlaneRouting),
            default_large_staging_disk_type: cdktn.stringToTerraform(this._defaultLargeStagingDiskType),
            ebs_encryption: cdktn.stringToTerraform(this._ebsEncryption),
            ebs_encryption_key_arn: cdktn.stringToTerraform(this._ebsEncryptionKeyArn),
            internet_protocol: cdktn.stringToTerraform(this._internetProtocol),
            pit_policy: cdktn.listMapper(ccReplicationConfigurationTemplatePitPolicyPropertyToTerraform, false)(this._pitPolicy.internalValue),
            replication_server_instance_type: cdktn.stringToTerraform(this._replicationServerInstanceType),
            replication_servers_security_groups_i_ds: cdktn.listMapper(cdktn.stringToTerraform, false)(this._replicationServersSecurityGroupsIDs),
            staging_area_subnet_id: cdktn.stringToTerraform(this._stagingAreaSubnetId),
            staging_area_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._stagingAreaTags),
            tags: cdktn.listMapper(ccReplicationConfigurationTemplateTagsPropertyToTerraform, false)(this._tags.internalValue),
            use_dedicated_replication_server: cdktn.booleanToTerraform(this._useDedicatedReplicationServer),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            associate_default_security_group: {
                value: cdktn.booleanToHclTerraform(this._associateDefaultSecurityGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_replicate_new_disks: {
                value: cdktn.booleanToHclTerraform(this._autoReplicateNewDisks),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bandwidth_throttling: {
                value: cdktn.numberToHclTerraform(this._bandwidthThrottling),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            create_public_ip: {
                value: cdktn.booleanToHclTerraform(this._createPublicIp),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            data_plane_routing: {
                value: cdktn.stringToHclTerraform(this._dataPlaneRouting),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_large_staging_disk_type: {
                value: cdktn.stringToHclTerraform(this._defaultLargeStagingDiskType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ebs_encryption: {
                value: cdktn.stringToHclTerraform(this._ebsEncryption),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ebs_encryption_key_arn: {
                value: cdktn.stringToHclTerraform(this._ebsEncryptionKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            internet_protocol: {
                value: cdktn.stringToHclTerraform(this._internetProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pit_policy: {
                value: cdktn.listMapperHcl(ccReplicationConfigurationTemplatePitPolicyPropertyToHclTerraform, false)(this._pitPolicy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcReplicationConfigurationTemplate.PitPolicyPropertyList",
            },
            replication_server_instance_type: {
                value: cdktn.stringToHclTerraform(this._replicationServerInstanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_servers_security_groups_i_ds: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._replicationServersSecurityGroupsIDs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            staging_area_subnet_id: {
                value: cdktn.stringToHclTerraform(this._stagingAreaSubnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            staging_area_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._stagingAreaTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tags: {
                value: cdktn.listMapperHcl(ccReplicationConfigurationTemplateTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcReplicationConfigurationTemplate.TagsPropertyList",
            },
            use_dedicated_replication_server: {
                value: cdktn.booleanToHclTerraform(this._useDedicatedReplicationServer),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReplicationConfigurationTemplatePitPolicyPropertyToTerraform(struct?: CcReplicationConfigurationTemplate.PitPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        interval: cdktn.numberToTerraform(struct!.interval),
        retention_duration: cdktn.numberToTerraform(struct!.retentionDuration),
        rule_id: cdktn.numberToTerraform(struct!.ruleId),
        units: cdktn.stringToTerraform(struct!.units),
    }
}


export function ccReplicationConfigurationTemplatePitPolicyPropertyToHclTerraform(struct?: CcReplicationConfigurationTemplate.PitPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retention_duration: {
            value: cdktn.numberToHclTerraform(struct!.retentionDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rule_id: {
            value: cdktn.numberToHclTerraform(struct!.ruleId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        units: {
            value: cdktn.stringToHclTerraform(struct!.units),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationConfigurationTemplateTagsPropertyToTerraform(struct?: CcReplicationConfigurationTemplate.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReplicationConfigurationTemplateTagsPropertyToHclTerraform(struct?: CcReplicationConfigurationTemplate.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcReplicationConfigurationTemplate {
export interface PitPolicyProperty {
    /**
    * Whether this rule is enabled or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#enabled CcReplicationConfigurationTemplate#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * How often, in the chosen units, a snapshot should be taken.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#interval CcReplicationConfigurationTemplate#interval}
    */
    readonly interval: number;
    /**
    * The duration to retain a snapshot for, in the chosen units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#retention_duration CcReplicationConfigurationTemplate#retention_duration}
    */
    readonly retentionDuration: number;
    /**
    * The ID of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#rule_id CcReplicationConfigurationTemplate#rule_id}
    */
    readonly ruleId?: number;
    /**
    * The units used to measure the interval and retentionDuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#units CcReplicationConfigurationTemplate#units}
    */
    readonly units: string;
}
export class PitPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PitPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._retentionDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionDuration = this._retentionDuration;
        }
        if (this._ruleId !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleId = this._ruleId;
        }
        if (this._units !== undefined) {
            hasAnyValues = true;
            internalValueResult.units = this._units;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PitPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._interval = undefined;
            this._retentionDuration = undefined;
            this._ruleId = undefined;
            this._units = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._interval = value.interval;
            this._retentionDuration = value.retentionDuration;
            this._ruleId = value.ruleId;
            this._units = value.units;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // interval - computed: false, optional: false, required: true
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // retention_duration - computed: false, optional: false, required: true
    private _retentionDuration?: number; 
    public get retentionDuration() {
        return this.getNumberAttribute('retention_duration');
    }
    public set retentionDuration(value: number) {
        this._retentionDuration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionDurationInput() {
        return this._retentionDuration;
    }

    // rule_id - computed: true, optional: true, required: false
    private _ruleId?: number; 
    public get ruleId() {
        return this.getNumberAttribute('rule_id');
    }
    public set ruleId(value: number) {
        this._ruleId = value;
    }
    public resetRuleId() {
        this._ruleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleIdInput() {
        return this._ruleId;
    }

    // units - computed: false, optional: false, required: true
    private _units?: string; 
    public get units() {
        return this.getStringAttribute('units');
    }
    public set units(value: string) {
        this._units = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitsInput() {
        return this._units;
    }
}

export class PitPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : PitPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): PitPolicyPropertyOutputReference {
        return new PitPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#key CcReplicationConfigurationTemplate#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#value CcReplicationConfigurationTemplate#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
