// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcParameterProps extends cdktn.TerraformMetaArguments {
    /**
    * A regular expression used to validate the parameter value. For example, for ``String`` types with values restricted to numbers, you can specify the following: ``AllowedPattern=^\d+$``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#allowed_pattern CcParameter#allowed_pattern}
    */
    readonly allowedPattern?: string;
    /**
    * The data type of the parameter, such as ``text`` or ``aws:ec2:image``. The default is ``text``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#data_type CcParameter#data_type}
    */
    readonly dataType?: string;
    /**
    * Information about the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#description CcParameter#description}
    */
    readonly description?: string;
    /**
    * The name of the parameter.
    *   The reported maximum length of 2048 characters for a parameter name includes 1037 characters that are reserved for internal use by SYS. The maximum length for a parameter name that you specify is 1011 characters.
    *  This count of 1011 characters includes the characters in the ARN that precede the name you specify. This ARN length will vary depending on your partition and Region. For example, the following 45 characters count toward the 1011 character maximum for a parameter created in the US East (Ohio) Region: ``arn:aws:ssm:us-east-2:111122223333:parameter/``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#name CcParameter#name}
    */
    readonly name?: string;
    /**
    * Information about the policies assigned to a parameter.
    *  [Assigning parameter policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#policies CcParameter#policies}
    */
    readonly policies?: string;
    /**
    * Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a SYS parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#tags CcParameter#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The parameter tier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#tier CcParameter#tier}
    */
    readonly tier?: string;
    /**
    * The type of parameter.
    *   Parameters of type ``SecureString`` are not supported by CFNlong.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#type CcParameter#type}
    */
    readonly type: string;
    /**
    * The parameter value.
    *   If type is ``StringList``, the system returns a comma-separated string with no spaces between commas in the ``Value`` field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#value CcParameter#value}
    */
    readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter awscc_ssm_parameter}
*/
export class CcParameter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssm_parameter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcParameter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcParameter to import
    * @param importFromId The id of the existing CcParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcParameter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_parameter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_parameter awscc_ssm_parameter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcParameterProps
    */
    public constructor(scope: Construct, id: string, config: CcParameterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_parameter',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._allowedPattern = config.allowedPattern;
        this._dataType = config.dataType;
        this._description = config.description;
        this._name = config.name;
        this._policies = config.policies;
        this._tags = config.tags;
        this._tier = config.tier;
        this._type = config.type;
        this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_pattern - computed: true, optional: true, required: false
    private _allowedPattern?: string; 
    public get allowedPattern() {
        return this.getStringAttribute('allowed_pattern');
    }
    public set allowedPattern(value: string) {
        this._allowedPattern = value;
    }
    public resetAllowedPattern() {
        this._allowedPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPatternInput() {
        return this._allowedPattern;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
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

    // policies - computed: true, optional: true, required: false
    private _policies?: string; 
    public get policies() {
        return this.getStringAttribute('policies');
    }
    public set policies(value: string) {
        this._policies = value;
    }
    public resetPolicies() {
        this._policies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies;
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

    // tier - computed: true, optional: true, required: false
    private _tier?: string; 
    public get tier() {
        return this.getStringAttribute('tier');
    }
    public set tier(value: string) {
        this._tier = value;
    }
    public resetTier() {
        this._tier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
        return this._tier;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allowed_pattern: cdktn.stringToTerraform(this._allowedPattern),
            data_type: cdktn.stringToTerraform(this._dataType),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            policies: cdktn.stringToTerraform(this._policies),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            tier: cdktn.stringToTerraform(this._tier),
            type: cdktn.stringToTerraform(this._type),
            value: cdktn.stringToTerraform(this._value),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_pattern: {
                value: cdktn.stringToHclTerraform(this._allowedPattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_type: {
                value: cdktn.stringToHclTerraform(this._dataType),
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
            policies: {
                value: cdktn.stringToHclTerraform(this._policies),
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
            tier: {
                value: cdktn.stringToHclTerraform(this._tier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value: {
                value: cdktn.stringToHclTerraform(this._value),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcParameter {
}
