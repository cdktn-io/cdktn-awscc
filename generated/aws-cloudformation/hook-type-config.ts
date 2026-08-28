// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_type_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHookTypeConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration data for the extension, in this account and region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_type_config#configuration CcHookTypeConfig#configuration}
    */
    readonly configuration?: string;
    /**
    * An alias by which to refer to this extension configuration data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_type_config#configuration_alias CcHookTypeConfig#configuration_alias}
    */
    readonly configurationAlias?: string;
    /**
    * The Amazon Resource Name (ARN) of the type without version number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_type_config#type_arn CcHookTypeConfig#type_arn}
    */
    readonly typeArn?: string;
    /**
    * The name of the type being registered.
    * 
    * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_type_config#type_name CcHookTypeConfig#type_name}
    */
    readonly typeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_type_config awscc_cloudformation_hook_type_config}
*/
export class CcHookTypeConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_hook_type_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHookTypeConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHookTypeConfig to import
    * @param importFromId The id of the existing CcHookTypeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_type_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHookTypeConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_hook_type_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_type_config awscc_cloudformation_hook_type_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHookTypeConfigProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcHookTypeConfigProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_hook_type_config',
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
        this._configuration = config.configuration;
        this._configurationAlias = config.configurationAlias;
        this._typeArn = config.typeArn;
        this._typeName = config.typeName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }

    // configuration_alias - computed: true, optional: true, required: false
    private _configurationAlias?: string; 
    public get configurationAlias() {
        return this.getStringAttribute('configuration_alias');
    }
    public set configurationAlias(value: string) {
        this._configurationAlias = value;
    }
    public resetConfigurationAlias() {
        this._configurationAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationAliasInput() {
        return this._configurationAlias;
    }

    // configuration_arn - computed: true, optional: false, required: false
    public get configurationArn() {
        return this.getStringAttribute('configuration_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // type_arn - computed: true, optional: true, required: false
    private _typeArn?: string; 
    public get typeArn() {
        return this.getStringAttribute('type_arn');
    }
    public set typeArn(value: string) {
        this._typeArn = value;
    }
    public resetTypeArn() {
        this._typeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeArnInput() {
        return this._typeArn;
    }

    // type_name - computed: true, optional: true, required: false
    private _typeName?: string; 
    public get typeName() {
        return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
        this._typeName = value;
    }
    public resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
        return this._typeName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            configuration: cdktn.stringToTerraform(this._configuration),
            configuration_alias: cdktn.stringToTerraform(this._configurationAlias),
            type_arn: cdktn.stringToTerraform(this._typeArn),
            type_name: cdktn.stringToTerraform(this._typeName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: cdktn.stringToHclTerraform(this._configuration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration_alias: {
                value: cdktn.stringToHclTerraform(this._configurationAlias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type_arn: {
                value: cdktn.stringToHclTerraform(this._typeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type_name: {
                value: cdktn.stringToHclTerraform(this._typeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcHookTypeConfig {
}
