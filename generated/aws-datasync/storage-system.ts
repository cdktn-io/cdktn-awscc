// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStorageSystemProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#agent_arns CcStorageSystem#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#cloudwatch_log_group_arn CcStorageSystem#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#name CcStorageSystem#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#server_configuration CcStorageSystem#server_configuration}
    */
    readonly serverConfiguration: CcStorageSystem.ServerConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#server_credentials CcStorageSystem#server_credentials}
    */
    readonly serverCredentials?: CcStorageSystem.ServerCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#system_type CcStorageSystem#system_type}
    */
    readonly systemType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#tags CcStorageSystem#tags}
    */
    readonly tags?: CcStorageSystem.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system awscc_datasync_storage_system}
*/
export class CcStorageSystem extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_storage_system";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStorageSystem resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStorageSystem to import
    * @param importFromId The id of the existing CcStorageSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStorageSystem to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_storage_system", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system awscc_datasync_storage_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStorageSystemProps
    */
    public constructor(scope: Construct, id: string, config: CcStorageSystemProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_storage_system',
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
        this._agentArns = config.agentArns;
        this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
        this._name = config.name;
        this._serverConfiguration.internalValue = config.serverConfiguration;
        this._serverCredentials.internalValue = config.serverCredentials;
        this._systemType = config.systemType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_arns - computed: false, optional: false, required: true
    private _agentArns?: string[]; 
    public get agentArns() {
        return this.getListAttribute('agent_arns');
    }
    public set agentArns(value: string[]) {
        this._agentArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentArnsInput() {
        return this._agentArns;
    }

    // cloudwatch_log_group_arn - computed: true, optional: true, required: false
    private _cloudwatchLogGroupArn?: string; 
    public get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    public set cloudwatchLogGroupArn(value: string) {
        this._cloudwatchLogGroupArn = value;
    }
    public resetCloudwatchLogGroupArn() {
        this._cloudwatchLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupArnInput() {
        return this._cloudwatchLogGroupArn;
    }

    // connectivity_status - computed: true, optional: false, required: false
    public get connectivityStatus() {
        return this.getStringAttribute('connectivity_status');
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

    // secrets_manager_arn - computed: true, optional: false, required: false
    public get secretsManagerArn() {
        return this.getStringAttribute('secrets_manager_arn');
    }

    // server_configuration - computed: false, optional: false, required: true
    private _serverConfiguration = new CcStorageSystem.ServerConfigurationPropertyOutputReference(this, "server_configuration");
    public get serverConfiguration() {
        return this._serverConfiguration;
    }
    public putServerConfiguration(value: CcStorageSystem.ServerConfigurationProperty) {
        this._serverConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverConfigurationInput() {
        return this._serverConfiguration.internalValue;
    }

    // server_credentials - computed: true, optional: true, required: false
    private _serverCredentials = new CcStorageSystem.ServerCredentialsPropertyOutputReference(this, "server_credentials");
    public get serverCredentials() {
        return this._serverCredentials;
    }
    public putServerCredentials(value: CcStorageSystem.ServerCredentialsProperty) {
        this._serverCredentials.internalValue = value;
    }
    public resetServerCredentials() {
        this._serverCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCredentialsInput() {
        return this._serverCredentials.internalValue;
    }

    // storage_system_arn - computed: true, optional: false, required: false
    public get storageSystemArn() {
        return this.getStringAttribute('storage_system_arn');
    }

    // storage_system_id - computed: true, optional: false, required: false
    public get storageSystemId() {
        return this.getStringAttribute('storage_system_id');
    }

    // system_type - computed: false, optional: false, required: true
    private _systemType?: string; 
    public get systemType() {
        return this.getStringAttribute('system_type');
    }
    public set systemType(value: string) {
        this._systemType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get systemTypeInput() {
        return this._systemType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStorageSystem.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStorageSystem.TagsProperty[] | cdktn.IResolvable) {
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
            agent_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._agentArns),
            cloudwatch_log_group_arn: cdktn.stringToTerraform(this._cloudwatchLogGroupArn),
            name: cdktn.stringToTerraform(this._name),
            server_configuration: ccStorageSystemServerConfigurationPropertyToTerraform(this._serverConfiguration.internalValue),
            server_credentials: ccStorageSystemServerCredentialsPropertyToTerraform(this._serverCredentials.internalValue),
            system_type: cdktn.stringToTerraform(this._systemType),
            tags: cdktn.listMapper(ccStorageSystemTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._agentArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            cloudwatch_log_group_arn: {
                value: cdktn.stringToHclTerraform(this._cloudwatchLogGroupArn),
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
            server_configuration: {
                value: ccStorageSystemServerConfigurationPropertyToHclTerraform(this._serverConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStorageSystem.ServerConfigurationProperty",
            },
            server_credentials: {
                value: ccStorageSystemServerCredentialsPropertyToHclTerraform(this._serverCredentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStorageSystem.ServerCredentialsProperty",
            },
            system_type: {
                value: cdktn.stringToHclTerraform(this._systemType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStorageSystemTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStorageSystem.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStorageSystemServerConfigurationPropertyToTerraform(struct?: CcStorageSystem.ServerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        server_hostname: cdktn.stringToTerraform(struct!.serverHostname),
        server_port: cdktn.numberToTerraform(struct!.serverPort),
    }
}


export function ccStorageSystemServerConfigurationPropertyToHclTerraform(struct?: CcStorageSystem.ServerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        server_hostname: {
            value: cdktn.stringToHclTerraform(struct!.serverHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_port: {
            value: cdktn.numberToHclTerraform(struct!.serverPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageSystemServerCredentialsPropertyToTerraform(struct?: CcStorageSystem.ServerCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccStorageSystemServerCredentialsPropertyToHclTerraform(struct?: CcStorageSystem.ServerCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageSystemTagsPropertyToTerraform(struct?: CcStorageSystem.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStorageSystemTagsPropertyToHclTerraform(struct?: CcStorageSystem.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcStorageSystem {
export interface ServerConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#server_hostname CcStorageSystem#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#server_port CcStorageSystem#server_port}
    */
    readonly serverPort?: number;
}
export class ServerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serverHostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverHostname = this._serverHostname;
        }
        if (this._serverPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverPort = this._serverPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serverHostname = undefined;
            this._serverPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serverHostname = value.serverHostname;
            this._serverPort = value.serverPort;
        }
    }

    // server_hostname - computed: false, optional: false, required: true
    private _serverHostname?: string; 
    public get serverHostname() {
        return this.getStringAttribute('server_hostname');
    }
    public set serverHostname(value: string) {
        this._serverHostname = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverHostnameInput() {
        return this._serverHostname;
    }

    // server_port - computed: true, optional: true, required: false
    private _serverPort?: number; 
    public get serverPort() {
        return this.getNumberAttribute('server_port');
    }
    public set serverPort(value: number) {
        this._serverPort = value;
    }
    public resetServerPort() {
        this._serverPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverPortInput() {
        return this._serverPort;
    }
}
export interface ServerCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#password CcStorageSystem#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#username CcStorageSystem#username}
    */
    readonly username?: string;
}
export class ServerCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#key CcStorageSystem#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_storage_system#value CcStorageSystem#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
