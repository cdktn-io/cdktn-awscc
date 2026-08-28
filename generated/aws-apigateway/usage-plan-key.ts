// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan_key

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUsagePlanKeyProps extends cdktn.TerraformMetaArguments {
    /**
    * The Id of the UsagePlanKey resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan_key#key_id CcUsagePlanKey#key_id}
    */
    readonly keyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan_key#key_type CcUsagePlanKey#key_type}
    */
    readonly keyType: string;
    /**
    * The Id of the UsagePlan resource representing the usage plan containing the UsagePlanKey resource representing a plan customer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan_key#usage_plan_id CcUsagePlanKey#usage_plan_id}
    */
    readonly usagePlanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan_key awscc_apigateway_usage_plan_key}
*/
export class CcUsagePlanKey extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_usage_plan_key";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUsagePlanKey resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUsagePlanKey to import
    * @param importFromId The id of the existing CcUsagePlanKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUsagePlanKey to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_usage_plan_key", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan_key awscc_apigateway_usage_plan_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUsagePlanKeyProps
    */
    public constructor(scope: Construct, id: string, config: CcUsagePlanKeyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_usage_plan_key',
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
        this._keyId = config.keyId;
        this._keyType = config.keyType;
        this._usagePlanId = config.usagePlanId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_id - computed: false, optional: false, required: true
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }

    // key_type - computed: false, optional: false, required: true
    private _keyType?: string; 
    public get keyType() {
        return this.getStringAttribute('key_type');
    }
    public set keyType(value: string) {
        this._keyType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyTypeInput() {
        return this._keyType;
    }

    // usage_plan_id - computed: false, optional: false, required: true
    private _usagePlanId?: string; 
    public get usagePlanId() {
        return this.getStringAttribute('usage_plan_id');
    }
    public set usagePlanId(value: string) {
        this._usagePlanId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usagePlanIdInput() {
        return this._usagePlanId;
    }

    // usage_plan_key_id - computed: true, optional: false, required: false
    public get usagePlanKeyId() {
        return this.getStringAttribute('usage_plan_key_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            key_id: cdktn.stringToTerraform(this._keyId),
            key_type: cdktn.stringToTerraform(this._keyType),
            usage_plan_id: cdktn.stringToTerraform(this._usagePlanId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            key_id: {
                value: cdktn.stringToHclTerraform(this._keyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_type: {
                value: cdktn.stringToHclTerraform(this._keyType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            usage_plan_id: {
                value: cdktn.stringToHclTerraform(this._usagePlanId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcUsagePlanKey {
}
