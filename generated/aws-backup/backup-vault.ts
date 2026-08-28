// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBackupVaultProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#access_policy CcBackupVault#access_policy}
    */
    readonly accessPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#backup_vault_name CcBackupVault#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#backup_vault_tags CcBackupVault#backup_vault_tags}
    */
    readonly backupVaultTags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#encryption_key_arn CcBackupVault#encryption_key_arn}
    */
    readonly encryptionKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#lock_configuration CcBackupVault#lock_configuration}
    */
    readonly lockConfiguration?: CcBackupVault.LockConfigurationTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#notifications CcBackupVault#notifications}
    */
    readonly notifications?: CcBackupVault.NotificationObjectTypeProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault awscc_backup_backup_vault}
*/
export class CcBackupVault extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_backup_backup_vault";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBackupVault resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBackupVault to import
    * @param importFromId The id of the existing CcBackupVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBackupVault to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_backup_vault", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault awscc_backup_backup_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBackupVaultProps
    */
    public constructor(scope: Construct, id: string, config: CcBackupVaultProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_backup_backup_vault',
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
        this._accessPolicy = config.accessPolicy;
        this._backupVaultName = config.backupVaultName;
        this._backupVaultTags = config.backupVaultTags;
        this._encryptionKeyArn = config.encryptionKeyArn;
        this._lockConfiguration.internalValue = config.lockConfiguration;
        this._notifications.internalValue = config.notifications;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_policy - computed: true, optional: true, required: false
    private _accessPolicy?: string; 
    public get accessPolicy() {
        return this.getStringAttribute('access_policy');
    }
    public set accessPolicy(value: string) {
        this._accessPolicy = value;
    }
    public resetAccessPolicy() {
        this._accessPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPolicyInput() {
        return this._accessPolicy;
    }

    // backup_vault_arn - computed: true, optional: false, required: false
    public get backupVaultArn() {
        return this.getStringAttribute('backup_vault_arn');
    }

    // backup_vault_name - computed: false, optional: false, required: true
    private _backupVaultName?: string; 
    public get backupVaultName() {
        return this.getStringAttribute('backup_vault_name');
    }
    public set backupVaultName(value: string) {
        this._backupVaultName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get backupVaultNameInput() {
        return this._backupVaultName;
    }

    // backup_vault_tags - computed: true, optional: true, required: false
    private _backupVaultTags?: { [key: string]: string }; 
    public get backupVaultTags() {
        return this.getStringMapAttribute('backup_vault_tags');
    }
    public set backupVaultTags(value: { [key: string]: string }) {
        this._backupVaultTags = value;
    }
    public resetBackupVaultTags() {
        this._backupVaultTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupVaultTagsInput() {
        return this._backupVaultTags;
    }

    // encryption_key_arn - computed: true, optional: true, required: false
    private _encryptionKeyArn?: string; 
    public get encryptionKeyArn() {
        return this.getStringAttribute('encryption_key_arn');
    }
    public set encryptionKeyArn(value: string) {
        this._encryptionKeyArn = value;
    }
    public resetEncryptionKeyArn() {
        this._encryptionKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyArnInput() {
        return this._encryptionKeyArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lock_configuration - computed: true, optional: true, required: false
    private _lockConfiguration = new CcBackupVault.LockConfigurationTypePropertyOutputReference(this, "lock_configuration");
    public get lockConfiguration() {
        return this._lockConfiguration;
    }
    public putLockConfiguration(value: CcBackupVault.LockConfigurationTypeProperty) {
        this._lockConfiguration.internalValue = value;
    }
    public resetLockConfiguration() {
        this._lockConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lockConfigurationInput() {
        return this._lockConfiguration.internalValue;
    }

    // notifications - computed: true, optional: true, required: false
    private _notifications = new CcBackupVault.NotificationObjectTypePropertyOutputReference(this, "notifications");
    public get notifications() {
        return this._notifications;
    }
    public putNotifications(value: CcBackupVault.NotificationObjectTypeProperty) {
        this._notifications.internalValue = value;
    }
    public resetNotifications() {
        this._notifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationsInput() {
        return this._notifications.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_policy: cdktn.stringToTerraform(this._accessPolicy),
            backup_vault_name: cdktn.stringToTerraform(this._backupVaultName),
            backup_vault_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._backupVaultTags),
            encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
            lock_configuration: ccBackupVaultLockConfigurationTypePropertyToTerraform(this._lockConfiguration.internalValue),
            notifications: ccBackupVaultNotificationObjectTypePropertyToTerraform(this._notifications.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_policy: {
                value: cdktn.stringToHclTerraform(this._accessPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            backup_vault_name: {
                value: cdktn.stringToHclTerraform(this._backupVaultName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            backup_vault_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._backupVaultTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            encryption_key_arn: {
                value: cdktn.stringToHclTerraform(this._encryptionKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lock_configuration: {
                value: ccBackupVaultLockConfigurationTypePropertyToHclTerraform(this._lockConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBackupVault.LockConfigurationTypeProperty",
            },
            notifications: {
                value: ccBackupVaultNotificationObjectTypePropertyToHclTerraform(this._notifications.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBackupVault.NotificationObjectTypeProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBackupVaultLockConfigurationTypePropertyToTerraform(struct?: CcBackupVault.LockConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        changeable_for_days: cdktn.numberToTerraform(struct!.changeableForDays),
        max_retention_days: cdktn.numberToTerraform(struct!.maxRetentionDays),
        min_retention_days: cdktn.numberToTerraform(struct!.minRetentionDays),
    }
}


export function ccBackupVaultLockConfigurationTypePropertyToHclTerraform(struct?: CcBackupVault.LockConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        changeable_for_days: {
            value: cdktn.numberToHclTerraform(struct!.changeableForDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_retention_days: {
            value: cdktn.numberToHclTerraform(struct!.maxRetentionDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_retention_days: {
            value: cdktn.numberToHclTerraform(struct!.minRetentionDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBackupVaultNotificationObjectTypePropertyToTerraform(struct?: CcBackupVault.NotificationObjectTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        backup_vault_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.backupVaultEvents),
        sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
    }
}


export function ccBackupVaultNotificationObjectTypePropertyToHclTerraform(struct?: CcBackupVault.NotificationObjectTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        backup_vault_events: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.backupVaultEvents),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        sns_topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcBackupVault {
export interface LockConfigurationTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#changeable_for_days CcBackupVault#changeable_for_days}
    */
    readonly changeableForDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#max_retention_days CcBackupVault#max_retention_days}
    */
    readonly maxRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#min_retention_days CcBackupVault#min_retention_days}
    */
    readonly minRetentionDays?: number;
}
export class LockConfigurationTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LockConfigurationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._changeableForDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.changeableForDays = this._changeableForDays;
        }
        if (this._maxRetentionDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRetentionDays = this._maxRetentionDays;
        }
        if (this._minRetentionDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.minRetentionDays = this._minRetentionDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LockConfigurationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._changeableForDays = undefined;
            this._maxRetentionDays = undefined;
            this._minRetentionDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._changeableForDays = value.changeableForDays;
            this._maxRetentionDays = value.maxRetentionDays;
            this._minRetentionDays = value.minRetentionDays;
        }
    }

    // changeable_for_days - computed: true, optional: true, required: false
    private _changeableForDays?: number; 
    public get changeableForDays() {
        return this.getNumberAttribute('changeable_for_days');
    }
    public set changeableForDays(value: number) {
        this._changeableForDays = value;
    }
    public resetChangeableForDays() {
        this._changeableForDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get changeableForDaysInput() {
        return this._changeableForDays;
    }

    // max_retention_days - computed: true, optional: true, required: false
    private _maxRetentionDays?: number; 
    public get maxRetentionDays() {
        return this.getNumberAttribute('max_retention_days');
    }
    public set maxRetentionDays(value: number) {
        this._maxRetentionDays = value;
    }
    public resetMaxRetentionDays() {
        this._maxRetentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetentionDaysInput() {
        return this._maxRetentionDays;
    }

    // min_retention_days - computed: true, optional: true, required: false
    private _minRetentionDays?: number; 
    public get minRetentionDays() {
        return this.getNumberAttribute('min_retention_days');
    }
    public set minRetentionDays(value: number) {
        this._minRetentionDays = value;
    }
    public resetMinRetentionDays() {
        this._minRetentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minRetentionDaysInput() {
        return this._minRetentionDays;
    }
}
export interface NotificationObjectTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#backup_vault_events CcBackupVault#backup_vault_events}
    */
    readonly backupVaultEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_backup_vault#sns_topic_arn CcBackupVault#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
}
export class NotificationObjectTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationObjectTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._backupVaultEvents !== undefined) {
            hasAnyValues = true;
            internalValueResult.backupVaultEvents = this._backupVaultEvents;
        }
        if (this._snsTopicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsTopicArn = this._snsTopicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationObjectTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._backupVaultEvents = undefined;
            this._snsTopicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._backupVaultEvents = value.backupVaultEvents;
            this._snsTopicArn = value.snsTopicArn;
        }
    }

    // backup_vault_events - computed: true, optional: true, required: false
    private _backupVaultEvents?: string[]; 
    public get backupVaultEvents() {
        return this.getListAttribute('backup_vault_events');
    }
    public set backupVaultEvents(value: string[]) {
        this._backupVaultEvents = value;
    }
    public resetBackupVaultEvents() {
        this._backupVaultEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupVaultEventsInput() {
        return this._backupVaultEvents;
    }

    // sns_topic_arn - computed: true, optional: true, required: false
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
        this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
        this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
        return this._snsTopicArn;
    }
}
}
