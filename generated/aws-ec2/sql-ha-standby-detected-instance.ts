// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_sql_ha_standby_detected_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSqlHaStandbyDetectedInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the EC2 instance to enable for SQL Server high availability standby detection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_sql_ha_standby_detected_instance#instance_id CcSqlHaStandbyDetectedInstance#instance_id}
    */
    readonly instanceId: string;
    /**
    * The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance. If not specified, AWS Systems Manager agent will use default local user credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_sql_ha_standby_detected_instance#sql_server_credentials CcSqlHaStandbyDetectedInstance#sql_server_credentials}
    */
    readonly sqlServerCredentials?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_sql_ha_standby_detected_instance awscc_ec2_sql_ha_standby_detected_instance}
*/
export class CcSqlHaStandbyDetectedInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_sql_ha_standby_detected_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSqlHaStandbyDetectedInstance to import
    * @param importFromId The id of the existing CcSqlHaStandbyDetectedInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_sql_ha_standby_detected_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSqlHaStandbyDetectedInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_sql_ha_standby_detected_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_sql_ha_standby_detected_instance awscc_ec2_sql_ha_standby_detected_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSqlHaStandbyDetectedInstanceProps
    */
    public constructor(scope: Construct, id: string, config: CcSqlHaStandbyDetectedInstanceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_sql_ha_standby_detected_instance',
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
        this._instanceId = config.instanceId;
        this._sqlServerCredentials = config.sqlServerCredentials;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ha_status - computed: true, optional: false, required: false
    public get haStatus() {
        return this.getStringAttribute('ha_status');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // sql_server_credentials - computed: true, optional: true, required: false
    private _sqlServerCredentials?: string; 
    public get sqlServerCredentials() {
        return this.getStringAttribute('sql_server_credentials');
    }
    public set sqlServerCredentials(value: string) {
        this._sqlServerCredentials = value;
    }
    public resetSqlServerCredentials() {
        this._sqlServerCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlServerCredentialsInput() {
        return this._sqlServerCredentials;
    }

    // sql_server_license_usage - computed: true, optional: false, required: false
    public get sqlServerLicenseUsage() {
        return this.getStringAttribute('sql_server_license_usage');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_id: cdktn.stringToTerraform(this._instanceId),
            sql_server_credentials: cdktn.stringToTerraform(this._sqlServerCredentials),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_id: {
                value: cdktn.stringToHclTerraform(this._instanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sql_server_credentials: {
                value: cdktn.stringToHclTerraform(this._sqlServerCredentials),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSqlHaStandbyDetectedInstance {
}
