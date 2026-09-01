// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentAccountConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of an IAM service role in the environment account. AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#codebuild_role_arn CcEnvironmentAccountConnection#codebuild_role_arn}
    */
    readonly codebuildRoleArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#component_role_arn CcEnvironmentAccountConnection#component_role_arn}
    */
    readonly componentRoleArn?: string;
    /**
    * The environment account that's connected to the environment account connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#environment_account_id CcEnvironmentAccountConnection#environment_account_id}
    */
    readonly environmentAccountId?: string;
    /**
    * The name of the AWS Proton environment that's created in the associated management account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#environment_name CcEnvironmentAccountConnection#environment_name}
    */
    readonly environmentName?: string;
    /**
    * The ID of the management account that accepts or rejects the environment account connection. You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#management_account_id CcEnvironmentAccountConnection#management_account_id}
    */
    readonly managementAccountId?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. AWS Proton uses this role to provision infrastructure resources in the associated environment account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#role_arn CcEnvironmentAccountConnection#role_arn}
    */
    readonly roleArn?: string;
    /**
    * <p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p>
    *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
    *         <i>Proton User Guide</i>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#tags CcEnvironmentAccountConnection#tags}
    */
    readonly tags?: CcEnvironmentAccountConnection.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection awscc_proton_environment_account_connection}
*/
export class CcEnvironmentAccountConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_proton_environment_account_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironmentAccountConnection to import
    * @param importFromId The id of the existing CcEnvironmentAccountConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironmentAccountConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_proton_environment_account_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection awscc_proton_environment_account_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentAccountConnectionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentAccountConnectionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_proton_environment_account_connection',
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
        this._codebuildRoleArn = config.codebuildRoleArn;
        this._componentRoleArn = config.componentRoleArn;
        this._environmentAccountId = config.environmentAccountId;
        this._environmentName = config.environmentName;
        this._managementAccountId = config.managementAccountId;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // codebuild_role_arn - computed: true, optional: true, required: false
    private _codebuildRoleArn?: string; 
    public get codebuildRoleArn() {
        return this.getStringAttribute('codebuild_role_arn');
    }
    public set codebuildRoleArn(value: string) {
        this._codebuildRoleArn = value;
    }
    public resetCodebuildRoleArn() {
        this._codebuildRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codebuildRoleArnInput() {
        return this._codebuildRoleArn;
    }

    // component_role_arn - computed: true, optional: true, required: false
    private _componentRoleArn?: string; 
    public get componentRoleArn() {
        return this.getStringAttribute('component_role_arn');
    }
    public set componentRoleArn(value: string) {
        this._componentRoleArn = value;
    }
    public resetComponentRoleArn() {
        this._componentRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentRoleArnInput() {
        return this._componentRoleArn;
    }

    // environment_account_connection_id - computed: true, optional: false, required: false
    public get environmentAccountConnectionId() {
        return this.getStringAttribute('environment_account_connection_id');
    }

    // environment_account_id - computed: true, optional: true, required: false
    private _environmentAccountId?: string; 
    public get environmentAccountId() {
        return this.getStringAttribute('environment_account_id');
    }
    public set environmentAccountId(value: string) {
        this._environmentAccountId = value;
    }
    public resetEnvironmentAccountId() {
        this._environmentAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentAccountIdInput() {
        return this._environmentAccountId;
    }

    // environment_name - computed: true, optional: true, required: false
    private _environmentName?: string; 
    public get environmentName() {
        return this.getStringAttribute('environment_name');
    }
    public set environmentName(value: string) {
        this._environmentName = value;
    }
    public resetEnvironmentName() {
        this._environmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentNameInput() {
        return this._environmentName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // management_account_id - computed: true, optional: true, required: false
    private _managementAccountId?: string; 
    public get managementAccountId() {
        return this.getStringAttribute('management_account_id');
    }
    public set managementAccountId(value: string) {
        this._managementAccountId = value;
    }
    public resetManagementAccountId() {
        this._managementAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managementAccountIdInput() {
        return this._managementAccountId;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEnvironmentAccountConnection.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEnvironmentAccountConnection.TagProperty[] | cdktn.IResolvable) {
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
            codebuild_role_arn: cdktn.stringToTerraform(this._codebuildRoleArn),
            component_role_arn: cdktn.stringToTerraform(this._componentRoleArn),
            environment_account_id: cdktn.stringToTerraform(this._environmentAccountId),
            environment_name: cdktn.stringToTerraform(this._environmentName),
            management_account_id: cdktn.stringToTerraform(this._managementAccountId),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccEnvironmentAccountConnectionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            codebuild_role_arn: {
                value: cdktn.stringToHclTerraform(this._codebuildRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            component_role_arn: {
                value: cdktn.stringToHclTerraform(this._componentRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_account_id: {
                value: cdktn.stringToHclTerraform(this._environmentAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_name: {
                value: cdktn.stringToHclTerraform(this._environmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            management_account_id: {
                value: cdktn.stringToHclTerraform(this._managementAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEnvironmentAccountConnectionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEnvironmentAccountConnection.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentAccountConnectionTagPropertyToTerraform(struct?: CcEnvironmentAccountConnection.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentAccountConnectionTagPropertyToHclTerraform(struct?: CcEnvironmentAccountConnection.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEnvironmentAccountConnection {
export interface TagProperty {
    /**
    * <p>The key of the resource tag.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#key CcEnvironmentAccountConnection#key}
    */
    readonly key?: string;
    /**
    * <p>The value of the resource tag.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#value CcEnvironmentAccountConnection#value}
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
