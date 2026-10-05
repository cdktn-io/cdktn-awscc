// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentEC2Props extends cdktn.TerraformMetaArguments {
    /**
    * The number of minutes until the running instance is shut down after the environment was last used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#automatic_stop_time_minutes CcEnvironmentEC2#automatic_stop_time_minutes}
    */
    readonly automaticStopTimeMinutes?: number;
    /**
    * The connection type used for connecting to an Amazon EC2 environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#connection_type CcEnvironmentEC2#connection_type}
    */
    readonly connectionType?: string;
    /**
    * The description of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#description CcEnvironmentEC2#description}
    */
    readonly description?: string;
    /**
    * The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#image_id CcEnvironmentEC2#image_id}
    */
    readonly imageId?: string;
    /**
    * The type of instance to connect to the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#instance_type CcEnvironmentEC2#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#name CcEnvironmentEC2#name}
    */
    readonly name?: string;
    /**
    * The Amazon Resource Name (ARN) of the environment owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#owner_arn CcEnvironmentEC2#owner_arn}
    */
    readonly ownerArn?: string;
    /**
    * Any AWS CodeCommit source code repositories to be cloned into the development environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#repositories CcEnvironmentEC2#repositories}
    */
    readonly repositories?: CcEnvironmentEC2.RepositoryProperty[] | cdktn.IResolvable;
    /**
    * The ID of the subnet in Amazon VPC that AWS Cloud9 will use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#subnet_id CcEnvironmentEC2#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#tags CcEnvironmentEC2#tags}
    */
    readonly tags?: CcEnvironmentEC2.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2 awscc_cloud9_environment_ec2}
*/
export class CcEnvironmentEC2 extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloud9_environment_ec2";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironmentEC2 resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironmentEC2 to import
    * @param importFromId The id of the existing CcEnvironmentEC2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironmentEC2 to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloud9_environment_ec2", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2 awscc_cloud9_environment_ec2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentEC2Props = {}
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentEC2Props = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloud9_environment_ec2',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._automaticStopTimeMinutes = config.automaticStopTimeMinutes;
        this._connectionType = config.connectionType;
        this._description = config.description;
        this._imageId = config.imageId;
        this._instanceType = config.instanceType;
        this._name = config.name;
        this._ownerArn = config.ownerArn;
        this._repositories.internalValue = config.repositories;
        this._subnetId = config.subnetId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // automatic_stop_time_minutes - computed: true, optional: true, required: false
    private _automaticStopTimeMinutes?: number; 
    public get automaticStopTimeMinutes() {
        return this.getNumberAttribute('automatic_stop_time_minutes');
    }
    public set automaticStopTimeMinutes(value: number) {
        this._automaticStopTimeMinutes = value;
    }
    public resetAutomaticStopTimeMinutes() {
        this._automaticStopTimeMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticStopTimeMinutesInput() {
        return this._automaticStopTimeMinutes;
    }

    // connection_type - computed: true, optional: true, required: false
    private _connectionType?: string; 
    public get connectionType() {
        return this.getStringAttribute('connection_type');
    }
    public set connectionType(value: string) {
        this._connectionType = value;
    }
    public resetConnectionType() {
        this._connectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTypeInput() {
        return this._connectionType;
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

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_id - computed: true, optional: true, required: false
    private _imageId?: string; 
    public get imageId() {
        return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
        this._imageId = value;
    }
    public resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
        return this._imageId;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
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

    // owner_arn - computed: true, optional: true, required: false
    private _ownerArn?: string; 
    public get ownerArn() {
        return this.getStringAttribute('owner_arn');
    }
    public set ownerArn(value: string) {
        this._ownerArn = value;
    }
    public resetOwnerArn() {
        this._ownerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerArnInput() {
        return this._ownerArn;
    }

    // repositories - computed: true, optional: true, required: false
    private _repositories = new CcEnvironmentEC2.RepositoryPropertyList(this, "repositories", false);
    public get repositories() {
        return this._repositories;
    }
    public putRepositories(value: CcEnvironmentEC2.RepositoryProperty[] | cdktn.IResolvable) {
        this._repositories.internalValue = value;
    }
    public resetRepositories() {
        this._repositories.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoriesInput() {
        return this._repositories.internalValue;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEnvironmentEC2.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEnvironmentEC2.TagProperty[] | cdktn.IResolvable) {
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
            automatic_stop_time_minutes: cdktn.numberToTerraform(this._automaticStopTimeMinutes),
            connection_type: cdktn.stringToTerraform(this._connectionType),
            description: cdktn.stringToTerraform(this._description),
            image_id: cdktn.stringToTerraform(this._imageId),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            name: cdktn.stringToTerraform(this._name),
            owner_arn: cdktn.stringToTerraform(this._ownerArn),
            repositories: cdktn.listMapper(ccEnvironmentEC2RepositoryPropertyToTerraform, false)(this._repositories.internalValue),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
            tags: cdktn.listMapper(ccEnvironmentEC2TagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            automatic_stop_time_minutes: {
                value: cdktn.numberToHclTerraform(this._automaticStopTimeMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            connection_type: {
                value: cdktn.stringToHclTerraform(this._connectionType),
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
            image_id: {
                value: cdktn.stringToHclTerraform(this._imageId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
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
            owner_arn: {
                value: cdktn.stringToHclTerraform(this._ownerArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repositories: {
                value: cdktn.listMapperHcl(ccEnvironmentEC2RepositoryPropertyToHclTerraform, false)(this._repositories.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironmentEC2.RepositoryPropertyList",
            },
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEnvironmentEC2TagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEnvironmentEC2.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentEC2RepositoryPropertyToTerraform(struct?: CcEnvironmentEC2.RepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        path_component: cdktn.stringToTerraform(struct!.pathComponent),
        repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
    }
}


export function ccEnvironmentEC2RepositoryPropertyToHclTerraform(struct?: CcEnvironmentEC2.RepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        path_component: {
            value: cdktn.stringToHclTerraform(struct!.pathComponent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository_url: {
            value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentEC2TagPropertyToTerraform(struct?: CcEnvironmentEC2.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentEC2TagPropertyToHclTerraform(struct?: CcEnvironmentEC2.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEnvironmentEC2 {
export interface RepositoryProperty {
    /**
    * The path within the development environment's default file system location to clone the AWS CodeCommit repository into.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#path_component CcEnvironmentEC2#path_component}
    */
    readonly pathComponent?: string;
    /**
    * The clone URL of the AWS CodeCommit repository to be cloned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#repository_url CcEnvironmentEC2#repository_url}
    */
    readonly repositoryUrl?: string;
}
export class RepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pathComponent !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathComponent = this._pathComponent;
        }
        if (this._repositoryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryUrl = this._repositoryUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pathComponent = undefined;
            this._repositoryUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pathComponent = value.pathComponent;
            this._repositoryUrl = value.repositoryUrl;
        }
    }

    // path_component - computed: true, optional: true, required: false
    private _pathComponent?: string; 
    public get pathComponent() {
        return this.getStringAttribute('path_component');
    }
    public set pathComponent(value: string) {
        this._pathComponent = value;
    }
    public resetPathComponent() {
        this._pathComponent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathComponentInput() {
        return this._pathComponent;
    }

    // repository_url - computed: true, optional: true, required: false
    private _repositoryUrl?: string; 
    public get repositoryUrl() {
        return this.getStringAttribute('repository_url');
    }
    public set repositoryUrl(value: string) {
        this._repositoryUrl = value;
    }
    public resetRepositoryUrl() {
        this._repositoryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryUrlInput() {
        return this._repositoryUrl;
    }
}

export class RepositoryPropertyList extends cdktn.ComplexList {
    public internalValue? : RepositoryProperty[] | cdktn.IResolvable

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
    public get(index: number): RepositoryPropertyOutputReference {
        return new RepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#key CcEnvironmentEC2#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#value CcEnvironmentEC2#value}
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
