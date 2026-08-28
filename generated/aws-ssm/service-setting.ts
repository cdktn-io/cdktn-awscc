// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_service_setting

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceSettingProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the service setting, such as /ssm/parameter-store/high-throughput-enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_service_setting#setting_id CcServiceSetting#setting_id}
    */
    readonly settingId: string;
    /**
    * The value of the service setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_service_setting#setting_value CcServiceSetting#setting_value}
    */
    readonly settingValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_service_setting awscc_ssm_service_setting}
*/
export class CcServiceSetting extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssm_service_setting";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceSetting resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceSetting to import
    * @param importFromId The id of the existing CcServiceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_service_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceSetting to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_service_setting", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_service_setting awscc_ssm_service_setting} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceSettingProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceSettingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_service_setting',
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
        this._settingId = config.settingId;
        this._settingValue = config.settingValue;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_date - computed: true, optional: false, required: false
    public get lastModifiedDate() {
        return this.getStringAttribute('last_modified_date');
    }

    // last_modified_user - computed: true, optional: false, required: false
    public get lastModifiedUser() {
        return this.getStringAttribute('last_modified_user');
    }

    // setting_id - computed: false, optional: false, required: true
    private _settingId?: string; 
    public get settingId() {
        return this.getStringAttribute('setting_id');
    }
    public set settingId(value: string) {
        this._settingId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get settingIdInput() {
        return this._settingId;
    }

    // setting_value - computed: false, optional: false, required: true
    private _settingValue?: string; 
    public get settingValue() {
        return this.getStringAttribute('setting_value');
    }
    public set settingValue(value: string) {
        this._settingValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get settingValueInput() {
        return this._settingValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            setting_id: cdktn.stringToTerraform(this._settingId),
            setting_value: cdktn.stringToTerraform(this._settingValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            setting_id: {
                value: cdktn.stringToHclTerraform(this._settingId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            setting_value: {
                value: cdktn.stringToHclTerraform(this._settingValue),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcServiceSetting {
}
