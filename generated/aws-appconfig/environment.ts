// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The application ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#application_id CcEnvironment#application_id}
    */
    readonly applicationId: string;
    /**
    * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#deletion_protection_check CcEnvironment#deletion_protection_check}
    */
    readonly deletionProtectionCheck?: string;
    /**
    * A description of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#description CcEnvironment#description}
    */
    readonly description?: string;
    /**
    * Amazon CloudWatch alarms to monitor during the deployment process.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#monitors CcEnvironment#monitors}
    */
    readonly monitors?: CcEnvironment.MonitorProperty[] | cdktn.IResolvable;
    /**
    * A name for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#name CcEnvironment#name}
    */
    readonly name: string;
    /**
    * Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#tags CcEnvironment#tags}
    */
    readonly tags?: CcEnvironment.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment awscc_appconfig_environment}
*/
export class CcEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appconfig_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironment to import
    * @param importFromId The id of the existing CcEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appconfig_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment awscc_appconfig_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appconfig_environment',
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
        this._applicationId = config.applicationId;
        this._deletionProtectionCheck = config.deletionProtectionCheck;
        this._description = config.description;
        this._monitors.internalValue = config.monitors;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // deletion_protection_check - computed: true, optional: true, required: false
    private _deletionProtectionCheck?: string; 
    public get deletionProtectionCheck() {
        return this.getStringAttribute('deletion_protection_check');
    }
    public set deletionProtectionCheck(value: string) {
        this._deletionProtectionCheck = value;
    }
    public resetDeletionProtectionCheck() {
        this._deletionProtectionCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionCheckInput() {
        return this._deletionProtectionCheck;
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

    // monitors - computed: true, optional: true, required: false
    private _monitors = new CcEnvironment.MonitorPropertyList(this, "monitors", false);
    public get monitors() {
        return this._monitors;
    }
    public putMonitors(value: CcEnvironment.MonitorProperty[] | cdktn.IResolvable) {
        this._monitors.internalValue = value;
    }
    public resetMonitors() {
        this._monitors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorsInput() {
        return this._monitors.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEnvironment.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEnvironment.TagProperty[] | cdktn.IResolvable) {
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
            application_id: cdktn.stringToTerraform(this._applicationId),
            deletion_protection_check: cdktn.stringToTerraform(this._deletionProtectionCheck),
            description: cdktn.stringToTerraform(this._description),
            monitors: cdktn.listMapper(ccEnvironmentMonitorPropertyToTerraform, false)(this._monitors.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccEnvironmentTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_id: {
                value: cdktn.stringToHclTerraform(this._applicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deletion_protection_check: {
                value: cdktn.stringToHclTerraform(this._deletionProtectionCheck),
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
            monitors: {
                value: cdktn.listMapperHcl(ccEnvironmentMonitorPropertyToHclTerraform, false)(this._monitors.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironment.MonitorPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEnvironmentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEnvironment.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentMonitorPropertyToTerraform(struct?: CcEnvironment.MonitorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_arn: cdktn.stringToTerraform(struct!.alarmArn),
        alarm_role_arn: cdktn.stringToTerraform(struct!.alarmRoleArn),
    }
}


export function ccEnvironmentMonitorPropertyToHclTerraform(struct?: CcEnvironment.MonitorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_arn: {
            value: cdktn.stringToHclTerraform(struct!.alarmArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        alarm_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.alarmRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentTagPropertyToTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentTagPropertyToHclTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEnvironment {
export interface MonitorProperty {
    /**
    * Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#alarm_arn CcEnvironment#alarm_arn}
    */
    readonly alarmArn?: string;
    /**
    * ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#alarm_role_arn CcEnvironment#alarm_role_arn}
    */
    readonly alarmRoleArn?: string;
}
export class MonitorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MonitorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmArn = this._alarmArn;
        }
        if (this._alarmRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmRoleArn = this._alarmRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmArn = undefined;
            this._alarmRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmArn = value.alarmArn;
            this._alarmRoleArn = value.alarmRoleArn;
        }
    }

    // alarm_arn - computed: true, optional: true, required: false
    private _alarmArn?: string; 
    public get alarmArn() {
        return this.getStringAttribute('alarm_arn');
    }
    public set alarmArn(value: string) {
        this._alarmArn = value;
    }
    public resetAlarmArn() {
        this._alarmArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmArnInput() {
        return this._alarmArn;
    }

    // alarm_role_arn - computed: true, optional: true, required: false
    private _alarmRoleArn?: string; 
    public get alarmRoleArn() {
        return this.getStringAttribute('alarm_role_arn');
    }
    public set alarmRoleArn(value: string) {
        this._alarmRoleArn = value;
    }
    public resetAlarmRoleArn() {
        this._alarmRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmRoleArnInput() {
        return this._alarmRoleArn;
    }
}

export class MonitorPropertyList extends cdktn.ComplexList {
    public internalValue? : MonitorProperty[] | cdktn.IResolvable

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
    public get(index: number): MonitorPropertyOutputReference {
        return new MonitorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key-value string map. The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#key CcEnvironment#key}
    */
    readonly key?: string;
    /**
    * The tag value can be up to 256 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_environment#value CcEnvironment#value}
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
