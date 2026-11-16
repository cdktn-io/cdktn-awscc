// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBackupAccessPointProps extends cdktn.TerraformMetaArguments {
    /**
    * For continuous (point-in-time) recovery points, the timestamp in ISO 8601 format (for example 2021-11-27T03:30:27Z) that determines the point-in-time view of the backup data. The timestamp must be within the continuous backup's retention period at the time the access point is created. Do not specify this for snapshot recovery points. The service reports it back under AccessPointMetadata.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#access_point_in_time CcBackupAccessPoint#access_point_in_time}
    */
    readonly accessPointInTime?: string;
    /**
    * An optional resource-based policy document, in JSON, to apply to the underlying Amazon S3 access point. The policy controls how backup data can be accessed through the access point. If you do not specify a policy, access is governed by the caller's IAM permissions. The serialized policy may not exceed 200000 characters. This value is not returned by the service and cannot be updated in place.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#access_point_policy CcBackupAccessPoint#access_point_policy}
    */
    readonly accessPointPolicy?: string;
    /**
    * The name of the backup access point. This name is shared with the Amazon S3 access point namespace. It must be unique within your account and Region and cannot conflict with an existing Amazon S3 access point. If omitted, a name is generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#name CcBackupAccessPoint#name}
    */
    readonly name?: string;
    /**
    * The Amazon Resource Name (ARN) of the recovery point for which to create the backup access point. The recovery point must be an Amazon S3 recovery point in the AVAILABLE, STOPPED, or COMPLETED state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#recovery_point_arn CcBackupAccessPoint#recovery_point_arn}
    */
    readonly recoveryPointArn: string;
    /**
    * The tags to assign to the backup access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#tags CcBackupAccessPoint#tags}
    */
    readonly tags?: CcBackupAccessPoint.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point awscc_backup_backup_access_point}
*/
export class CcBackupAccessPoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_backup_backup_access_point";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBackupAccessPoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBackupAccessPoint to import
    * @param importFromId The id of the existing CcBackupAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBackupAccessPoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_backup_access_point", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point awscc_backup_backup_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBackupAccessPointProps
    */
    public constructor(scope: Construct, id: string, config: CcBackupAccessPointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_backup_backup_access_point',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accessPointInTime = config.accessPointInTime;
        this._accessPointPolicy = config.accessPointPolicy;
        this._name = config.name;
        this._recoveryPointArn = config.recoveryPointArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_point_in_time - computed: true, optional: true, required: false
    private _accessPointInTime?: string; 
    public get accessPointInTime() {
        return this.getStringAttribute('access_point_in_time');
    }
    public set accessPointInTime(value: string) {
        this._accessPointInTime = value;
    }
    public resetAccessPointInTime() {
        this._accessPointInTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointInTimeInput() {
        return this._accessPointInTime;
    }

    // access_point_metadata - computed: true, optional: false, required: false
    private _accessPointMetadata = new CcBackupAccessPoint.AccessPointMetadataPropertyOutputReference(this, "access_point_metadata");
    public get accessPointMetadata() {
        return this._accessPointMetadata;
    }

    // access_point_policy - computed: true, optional: true, required: false
    private _accessPointPolicy?: string; 
    public get accessPointPolicy() {
        return this.getStringAttribute('access_point_policy');
    }
    public set accessPointPolicy(value: string) {
        this._accessPointPolicy = value;
    }
    public resetAccessPointPolicy() {
        this._accessPointPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointPolicyInput() {
        return this._accessPointPolicy;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // backup_vault_arn - computed: true, optional: false, required: false
    public get backupVaultArn() {
        return this.getStringAttribute('backup_vault_arn');
    }

    // backup_vault_name - computed: true, optional: false, required: false
    public get backupVaultName() {
        return this.getStringAttribute('backup_vault_name');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // recovery_point_arn - computed: false, optional: false, required: true
    private _recoveryPointArn?: string; 
    public get recoveryPointArn() {
        return this.getStringAttribute('recovery_point_arn');
    }
    public set recoveryPointArn(value: string) {
        this._recoveryPointArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryPointArnInput() {
        return this._recoveryPointArn;
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcBackupAccessPoint.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcBackupAccessPoint.TagsProperty[] | cdktn.IResolvable) {
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
            access_point_in_time: cdktn.stringToTerraform(this._accessPointInTime),
            access_point_policy: cdktn.stringToTerraform(this._accessPointPolicy),
            name: cdktn.stringToTerraform(this._name),
            recovery_point_arn: cdktn.stringToTerraform(this._recoveryPointArn),
            tags: cdktn.listMapper(ccBackupAccessPointTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_point_in_time: {
                value: cdktn.stringToHclTerraform(this._accessPointInTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            access_point_policy: {
                value: cdktn.stringToHclTerraform(this._accessPointPolicy),
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
            recovery_point_arn: {
                value: cdktn.stringToHclTerraform(this._recoveryPointArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccBackupAccessPointTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBackupAccessPoint.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBackupAccessPointAccessPointMetadataPropertyToTerraform(struct?: CcBackupAccessPoint.AccessPointMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccBackupAccessPointAccessPointMetadataPropertyToHclTerraform(struct?: CcBackupAccessPoint.AccessPointMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccBackupAccessPointTagsPropertyToTerraform(struct?: CcBackupAccessPoint.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBackupAccessPointTagsPropertyToHclTerraform(struct?: CcBackupAccessPoint.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcBackupAccessPoint {
export interface AccessPointMetadataProperty {
}
export class AccessPointMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessPointMetadataProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessPointMetadataProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // access_point_in_time - computed: true, optional: false, required: false
    public get accessPointInTime() {
        return this.getStringAttribute('access_point_in_time');
    }

    // s3_access_point_alias - computed: true, optional: false, required: false
    public get s3AccessPointAlias() {
        return this.getStringAttribute('s3_access_point_alias');
    }

    // s3_access_point_arn - computed: true, optional: false, required: false
    public get s3AccessPointArn() {
        return this.getStringAttribute('s3_access_point_arn');
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#key CcBackupAccessPoint#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/backup_backup_access_point#value CcBackupAccessPoint#value}
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
