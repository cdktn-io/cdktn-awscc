// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_service_function

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceFunctionProps extends cdktn.TerraformMetaArguments {
    /**
    * The criticality of the service function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_service_function#criticality CcServiceFunction#criticality}
    */
    readonly criticality: string;
    /**
    * The description of the service function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_service_function#description CcServiceFunction#description}
    */
    readonly description?: string;
    /**
    * The name of the service function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_service_function#name CcServiceFunction#name}
    */
    readonly name: string;
    /**
    * The ARN of the parent service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_service_function#service_arn CcServiceFunction#service_arn}
    */
    readonly serviceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_service_function awscc_resiliencehubv2_service_function}
*/
export class CcServiceFunction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_resiliencehubv2_service_function";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceFunction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceFunction to import
    * @param importFromId The id of the existing CcServiceFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_service_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceFunction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehubv2_service_function", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_service_function awscc_resiliencehubv2_service_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceFunctionProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceFunctionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_resiliencehubv2_service_function',
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
        this._criticality = config.criticality;
        this._description = config.description;
        this._name = config.name;
        this._serviceArn = config.serviceArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // criticality - computed: false, optional: false, required: true
    private _criticality?: string; 
    public get criticality() {
        return this.getStringAttribute('criticality');
    }
    public set criticality(value: string) {
        this._criticality = value;
    }
    // Temporarily expose input value. Use with caution.
    public get criticalityInput() {
        return this._criticality;
    }

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // resource_count - computed: true, optional: false, required: false
    public get resourceCount() {
        return this.getNumberAttribute('resource_count');
    }

    // service_arn - computed: false, optional: false, required: true
    private _serviceArn?: string; 
    public get serviceArn() {
        return this.getStringAttribute('service_arn');
    }
    public set serviceArn(value: string) {
        this._serviceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceArnInput() {
        return this._serviceArn;
    }

    // service_function_id - computed: true, optional: false, required: false
    public get serviceFunctionId() {
        return this.getStringAttribute('service_function_id');
    }

    // source - computed: true, optional: false, required: false
    public get source() {
        return this.getStringAttribute('source');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            criticality: cdktn.stringToTerraform(this._criticality),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            service_arn: cdktn.stringToTerraform(this._serviceArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            criticality: {
                value: cdktn.stringToHclTerraform(this._criticality),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            service_arn: {
                value: cdktn.stringToHclTerraform(this._serviceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcServiceFunction {
}
