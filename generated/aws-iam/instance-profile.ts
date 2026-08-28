// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_instance_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the instance profile to create.
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_instance_profile#instance_profile_name CcInstanceProfile#instance_profile_name}
    */
    readonly instanceProfileName?: string;
    /**
    * The path to the instance profile. For more information about paths, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
    *  This parameter is optional. If it is not included, it defaults to a slash (/).
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_instance_profile#path CcInstanceProfile#path}
    */
    readonly path?: string;
    /**
    * The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_instance_profile#roles CcInstanceProfile#roles}
    */
    readonly roles: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_instance_profile awscc_iam_instance_profile}
*/
export class CcInstanceProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iam_instance_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstanceProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstanceProfile to import
    * @param importFromId The id of the existing CcInstanceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_instance_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstanceProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iam_instance_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_instance_profile awscc_iam_instance_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcInstanceProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_instance_profile',
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
        this._instanceProfileName = config.instanceProfileName;
        this._path = config.path;
        this._roles = config.roles;
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

    // instance_profile_name - computed: true, optional: true, required: false
    private _instanceProfileName?: string; 
    public get instanceProfileName() {
        return this.getStringAttribute('instance_profile_name');
    }
    public set instanceProfileName(value: string) {
        this._instanceProfileName = value;
    }
    public resetInstanceProfileName() {
        this._instanceProfileName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileNameInput() {
        return this._instanceProfileName;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // roles - computed: false, optional: false, required: true
    private _roles?: string[]; 
    public get roles() {
        return cdktn.Fn.tolist(this.getListAttribute('roles'));
    }
    public set roles(value: string[]) {
        this._roles = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesInput() {
        return this._roles;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_profile_name: cdktn.stringToTerraform(this._instanceProfileName),
            path: cdktn.stringToTerraform(this._path),
            roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._roles),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_profile_name: {
                value: cdktn.stringToHclTerraform(this._instanceProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktn.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            roles: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._roles),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcInstanceProfile {
}
