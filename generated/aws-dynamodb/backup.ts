// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_backup

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBackupProps extends cdktn.TerraformMetaArguments {
    /**
    * The name for the backup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_backup#backup_name CcBackup#backup_name}
    */
    readonly backupName: string;
    /**
    * The name of the table to back up.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_backup#table_name CcBackup#table_name}
    */
    readonly tableName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_backup awscc_dynamodb_backup}
*/
export class CcBackup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dynamodb_backup";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBackup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBackup to import
    * @param importFromId The id of the existing CcBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_backup#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBackup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dynamodb_backup", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_backup awscc_dynamodb_backup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBackupProps
    */
    public constructor(scope: Construct, id: string, config: CcBackupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dynamodb_backup',
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
        this._backupName = config.backupName;
        this._tableName = config.tableName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // backup_arn - computed: true, optional: false, required: false
    public get backupArn() {
        return this.getStringAttribute('backup_arn');
    }

    // backup_creation_date_time - computed: true, optional: false, required: false
    public get backupCreationDateTime() {
        return this.getStringAttribute('backup_creation_date_time');
    }

    // backup_id - computed: true, optional: false, required: false
    public get backupId() {
        return this.getStringAttribute('backup_id');
    }

    // backup_name - computed: false, optional: false, required: true
    private _backupName?: string; 
    public get backupName() {
        return this.getStringAttribute('backup_name');
    }
    public set backupName(value: string) {
        this._backupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get backupNameInput() {
        return this._backupName;
    }

    // backup_size_bytes - computed: true, optional: false, required: false
    public get backupSizeBytes() {
        return this.getNumberAttribute('backup_size_bytes');
    }

    // backup_status - computed: true, optional: false, required: false
    public get backupStatus() {
        return this.getStringAttribute('backup_status');
    }

    // backup_type - computed: true, optional: false, required: false
    public get backupType() {
        return this.getStringAttribute('backup_type');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // table_name - computed: false, optional: false, required: true
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            backup_name: cdktn.stringToTerraform(this._backupName),
            table_name: cdktn.stringToTerraform(this._tableName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            backup_name: {
                value: cdktn.stringToHclTerraform(this._backupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            table_name: {
                value: cdktn.stringToHclTerraform(this._tableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcBackup {
}
