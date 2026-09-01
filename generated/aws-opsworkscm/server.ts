// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#associate_public_ip_address CcServer#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#backup_id CcServer#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#backup_retention_count CcServer#backup_retention_count}
    */
    readonly backupRetentionCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#custom_certificate CcServer#custom_certificate}
    */
    readonly customCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#custom_domain CcServer#custom_domain}
    */
    readonly customDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#custom_private_key CcServer#custom_private_key}
    */
    readonly customPrivateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#disable_automated_backup CcServer#disable_automated_backup}
    */
    readonly disableAutomatedBackup?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#engine CcServer#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#engine_attributes CcServer#engine_attributes}
    */
    readonly engineAttributes?: CcServer.EngineAttributeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#engine_model CcServer#engine_model}
    */
    readonly engineModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#engine_version CcServer#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#instance_profile_arn CcServer#instance_profile_arn}
    */
    readonly instanceProfileArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#instance_type CcServer#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#key_pair CcServer#key_pair}
    */
    readonly keyPair?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#preferred_backup_window CcServer#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#preferred_maintenance_window CcServer#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#security_group_ids CcServer#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#server_name CcServer#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#service_role_arn CcServer#service_role_arn}
    */
    readonly serviceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#subnet_ids CcServer#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#tags CcServer#tags}
    */
    readonly tags?: CcServer.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server awscc_opsworkscm_server}
*/
export class CcServer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_opsworkscm_server";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServer to import
    * @param importFromId The id of the existing CcServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opsworkscm_server", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server awscc_opsworkscm_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServerProps
    */
    public constructor(scope: Construct, id: string, config: CcServerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_opsworkscm_server',
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
        this._associatePublicIpAddress = config.associatePublicIpAddress;
        this._backupId = config.backupId;
        this._backupRetentionCount = config.backupRetentionCount;
        this._customCertificate = config.customCertificate;
        this._customDomain = config.customDomain;
        this._customPrivateKey = config.customPrivateKey;
        this._disableAutomatedBackup = config.disableAutomatedBackup;
        this._engine = config.engine;
        this._engineAttributes.internalValue = config.engineAttributes;
        this._engineModel = config.engineModel;
        this._engineVersion = config.engineVersion;
        this._instanceProfileArn = config.instanceProfileArn;
        this._instanceType = config.instanceType;
        this._keyPair = config.keyPair;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._securityGroupIds = config.securityGroupIds;
        this._serverName = config.serverName;
        this._serviceRoleArn = config.serviceRoleArn;
        this._subnetIds = config.subnetIds;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // associate_public_ip_address - computed: true, optional: true, required: false
    private _associatePublicIpAddress?: boolean | cdktn.IResolvable; 
    public get associatePublicIpAddress() {
        return this.getBooleanAttribute('associate_public_ip_address');
    }
    public set associatePublicIpAddress(value: boolean | cdktn.IResolvable) {
        this._associatePublicIpAddress = value;
    }
    public resetAssociatePublicIpAddress() {
        this._associatePublicIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatePublicIpAddressInput() {
        return this._associatePublicIpAddress;
    }

    // backup_id - computed: true, optional: true, required: false
    private _backupId?: string; 
    public get backupId() {
        return this.getStringAttribute('backup_id');
    }
    public set backupId(value: string) {
        this._backupId = value;
    }
    public resetBackupId() {
        this._backupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupIdInput() {
        return this._backupId;
    }

    // backup_retention_count - computed: true, optional: true, required: false
    private _backupRetentionCount?: number; 
    public get backupRetentionCount() {
        return this.getNumberAttribute('backup_retention_count');
    }
    public set backupRetentionCount(value: number) {
        this._backupRetentionCount = value;
    }
    public resetBackupRetentionCount() {
        this._backupRetentionCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupRetentionCountInput() {
        return this._backupRetentionCount;
    }

    // custom_certificate - computed: true, optional: true, required: false
    private _customCertificate?: string; 
    public get customCertificate() {
        return this.getStringAttribute('custom_certificate');
    }
    public set customCertificate(value: string) {
        this._customCertificate = value;
    }
    public resetCustomCertificate() {
        this._customCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customCertificateInput() {
        return this._customCertificate;
    }

    // custom_domain - computed: true, optional: true, required: false
    private _customDomain?: string; 
    public get customDomain() {
        return this.getStringAttribute('custom_domain');
    }
    public set customDomain(value: string) {
        this._customDomain = value;
    }
    public resetCustomDomain() {
        this._customDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDomainInput() {
        return this._customDomain;
    }

    // custom_private_key - computed: true, optional: true, required: false
    private _customPrivateKey?: string; 
    public get customPrivateKey() {
        return this.getStringAttribute('custom_private_key');
    }
    public set customPrivateKey(value: string) {
        this._customPrivateKey = value;
    }
    public resetCustomPrivateKey() {
        this._customPrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPrivateKeyInput() {
        return this._customPrivateKey;
    }

    // disable_automated_backup - computed: true, optional: true, required: false
    private _disableAutomatedBackup?: boolean | cdktn.IResolvable; 
    public get disableAutomatedBackup() {
        return this.getBooleanAttribute('disable_automated_backup');
    }
    public set disableAutomatedBackup(value: boolean | cdktn.IResolvable) {
        this._disableAutomatedBackup = value;
    }
    public resetDisableAutomatedBackup() {
        this._disableAutomatedBackup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableAutomatedBackupInput() {
        return this._disableAutomatedBackup;
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // engine - computed: true, optional: true, required: false
    private _engine?: string; 
    public get engine() {
        return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
        this._engine = value;
    }
    public resetEngine() {
        this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
        return this._engine;
    }

    // engine_attributes - computed: true, optional: true, required: false
    private _engineAttributes = new CcServer.EngineAttributePropertyList(this, "engine_attributes", false);
    public get engineAttributes() {
        return this._engineAttributes;
    }
    public putEngineAttributes(value: CcServer.EngineAttributeProperty[] | cdktn.IResolvable) {
        this._engineAttributes.internalValue = value;
    }
    public resetEngineAttributes() {
        this._engineAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineAttributesInput() {
        return this._engineAttributes.internalValue;
    }

    // engine_model - computed: true, optional: true, required: false
    private _engineModel?: string; 
    public get engineModel() {
        return this.getStringAttribute('engine_model');
    }
    public set engineModel(value: string) {
        this._engineModel = value;
    }
    public resetEngineModel() {
        this._engineModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineModelInput() {
        return this._engineModel;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_profile_arn - computed: false, optional: false, required: true
    private _instanceProfileArn?: string; 
    public get instanceProfileArn() {
        return this.getStringAttribute('instance_profile_arn');
    }
    public set instanceProfileArn(value: string) {
        this._instanceProfileArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileArnInput() {
        return this._instanceProfileArn;
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

    // key_pair - computed: true, optional: true, required: false
    private _keyPair?: string; 
    public get keyPair() {
        return this.getStringAttribute('key_pair');
    }
    public set keyPair(value: string) {
        this._keyPair = value;
    }
    public resetKeyPair() {
        this._keyPair = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPairInput() {
        return this._keyPair;
    }

    // preferred_backup_window - computed: true, optional: true, required: false
    private _preferredBackupWindow?: string; 
    public get preferredBackupWindow() {
        return this.getStringAttribute('preferred_backup_window');
    }
    public set preferredBackupWindow(value: string) {
        this._preferredBackupWindow = value;
    }
    public resetPreferredBackupWindow() {
        this._preferredBackupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredBackupWindowInput() {
        return this._preferredBackupWindow;
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

    // server_id - computed: true, optional: false, required: false
    public get serverId() {
        return this.getStringAttribute('server_id');
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // service_role_arn - computed: false, optional: false, required: true
    private _serviceRoleArn?: string; 
    public get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    public set serviceRoleArn(value: string) {
        this._serviceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleArnInput() {
        return this._serviceRoleArn;
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
    private _tags = new CcServer.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServer.TagProperty[] | cdktn.IResolvable) {
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
            associate_public_ip_address: cdktn.booleanToTerraform(this._associatePublicIpAddress),
            backup_id: cdktn.stringToTerraform(this._backupId),
            backup_retention_count: cdktn.numberToTerraform(this._backupRetentionCount),
            custom_certificate: cdktn.stringToTerraform(this._customCertificate),
            custom_domain: cdktn.stringToTerraform(this._customDomain),
            custom_private_key: cdktn.stringToTerraform(this._customPrivateKey),
            disable_automated_backup: cdktn.booleanToTerraform(this._disableAutomatedBackup),
            engine: cdktn.stringToTerraform(this._engine),
            engine_attributes: cdktn.listMapper(ccServerEngineAttributePropertyToTerraform, false)(this._engineAttributes.internalValue),
            engine_model: cdktn.stringToTerraform(this._engineModel),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            instance_profile_arn: cdktn.stringToTerraform(this._instanceProfileArn),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            key_pair: cdktn.stringToTerraform(this._keyPair),
            preferred_backup_window: cdktn.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            server_name: cdktn.stringToTerraform(this._serverName),
            service_role_arn: cdktn.stringToTerraform(this._serviceRoleArn),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.listMapper(ccServerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            associate_public_ip_address: {
                value: cdktn.booleanToHclTerraform(this._associatePublicIpAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            backup_id: {
                value: cdktn.stringToHclTerraform(this._backupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            backup_retention_count: {
                value: cdktn.numberToHclTerraform(this._backupRetentionCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            custom_certificate: {
                value: cdktn.stringToHclTerraform(this._customCertificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_domain: {
                value: cdktn.stringToHclTerraform(this._customDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_private_key: {
                value: cdktn.stringToHclTerraform(this._customPrivateKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_automated_backup: {
                value: cdktn.booleanToHclTerraform(this._disableAutomatedBackup),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            engine: {
                value: cdktn.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_attributes: {
                value: cdktn.listMapperHcl(ccServerEngineAttributePropertyToHclTerraform, false)(this._engineAttributes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcServer.EngineAttributePropertyList",
            },
            engine_model: {
                value: cdktn.stringToHclTerraform(this._engineModel),
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
            instance_profile_arn: {
                value: cdktn.stringToHclTerraform(this._instanceProfileArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_pair: {
                value: cdktn.stringToHclTerraform(this._keyPair),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_backup_window: {
                value: cdktn.stringToHclTerraform(this._preferredBackupWindow),
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
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            server_name: {
                value: cdktn.stringToHclTerraform(this._serverName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcServer.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServerEngineAttributePropertyToTerraform(struct?: CcServer.EngineAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServerEngineAttributePropertyToHclTerraform(struct?: CcServer.EngineAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccServerTagPropertyToTerraform(struct?: CcServer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServerTagPropertyToHclTerraform(struct?: CcServer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcServer {
export interface EngineAttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#name CcServer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#value CcServer#value}
    */
    readonly value?: string;
}
export class EngineAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EngineAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EngineAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class EngineAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : EngineAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): EngineAttributePropertyOutputReference {
        return new EngineAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#key CcServer#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opsworkscm_server#value CcServer#value}
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
