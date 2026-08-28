// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRobotProps extends cdktn.TerraformMetaArguments {
    /**
    * The target architecture of the robot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot#architecture CcRobot#architecture}
    */
    readonly architecture: string;
    /**
    * The Amazon Resource Name (ARN) of the fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot#fleet CcRobot#fleet}
    */
    readonly fleet?: string;
    /**
    * The Greengrass group id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot#greengrass_group_id CcRobot#greengrass_group_id}
    */
    readonly greengrassGroupId: string;
    /**
    * The name for the robot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot#name CcRobot#name}
    */
    readonly name?: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot#tags CcRobot#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot awscc_robomaker_robot}
*/
export class CcRobot extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_robomaker_robot";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRobot resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRobot to import
    * @param importFromId The id of the existing CcRobot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRobot to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_robomaker_robot", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot awscc_robomaker_robot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRobotProps
    */
    public constructor(scope: Construct, id: string, config: CcRobotProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_robomaker_robot',
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
        this._architecture = config.architecture;
        this._fleet = config.fleet;
        this._greengrassGroupId = config.greengrassGroupId;
        this._name = config.name;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // architecture - computed: false, optional: false, required: true
    private _architecture?: string; 
    public get architecture() {
        return this.getStringAttribute('architecture');
    }
    public set architecture(value: string) {
        this._architecture = value;
    }
    // Temporarily expose input value. Use with caution.
    public get architectureInput() {
        return this._architecture;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // fleet - computed: true, optional: true, required: false
    private _fleet?: string; 
    public get fleet() {
        return this.getStringAttribute('fleet');
    }
    public set fleet(value: string) {
        this._fleet = value;
    }
    public resetFleet() {
        this._fleet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetInput() {
        return this._fleet;
    }

    // greengrass_group_id - computed: false, optional: false, required: true
    private _greengrassGroupId?: string; 
    public get greengrassGroupId() {
        return this.getStringAttribute('greengrass_group_id');
    }
    public set greengrassGroupId(value: string) {
        this._greengrassGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get greengrassGroupIdInput() {
        return this._greengrassGroupId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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
            architecture: cdktn.stringToTerraform(this._architecture),
            fleet: cdktn.stringToTerraform(this._fleet),
            greengrass_group_id: cdktn.stringToTerraform(this._greengrassGroupId),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            architecture: {
                value: cdktn.stringToHclTerraform(this._architecture),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet: {
                value: cdktn.stringToHclTerraform(this._fleet),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            greengrass_group_id: {
                value: cdktn.stringToHclTerraform(this._greengrassGroupId),
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

export namespace CcRobot {
}
