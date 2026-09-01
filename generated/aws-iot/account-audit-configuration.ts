// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccountAuditConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#account_id CcAccountAuditConfiguration#account_id}
    */
    readonly accountId: string;
    /**
    * Specifies which audit checks are enabled and disabled for this account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#audit_check_configurations CcAccountAuditConfiguration#audit_check_configurations}
    */
    readonly auditCheckConfigurations: CcAccountAuditConfiguration.AuditCheckConfigurationsProperty;
    /**
    * Information about the targets to which audit notifications are sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#audit_notification_target_configurations CcAccountAuditConfiguration#audit_notification_target_configurations}
    */
    readonly auditNotificationTargetConfigurations?: CcAccountAuditConfiguration.AuditNotificationTargetConfigurationsProperty;
    /**
    * The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#role_arn CcAccountAuditConfiguration#role_arn}
    */
    readonly roleArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration awscc_iot_account_audit_configuration}
*/
export class CcAccountAuditConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_account_audit_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccountAuditConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccountAuditConfiguration to import
    * @param importFromId The id of the existing CcAccountAuditConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccountAuditConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_account_audit_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration awscc_iot_account_audit_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccountAuditConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcAccountAuditConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_account_audit_configuration',
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
        this._accountId = config.accountId;
        this._auditCheckConfigurations.internalValue = config.auditCheckConfigurations;
        this._auditNotificationTargetConfigurations.internalValue = config.auditNotificationTargetConfigurations;
        this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // audit_check_configurations - computed: false, optional: false, required: true
    private _auditCheckConfigurations = new CcAccountAuditConfiguration.AuditCheckConfigurationsPropertyOutputReference(this, "audit_check_configurations");
    public get auditCheckConfigurations() {
        return this._auditCheckConfigurations;
    }
    public putAuditCheckConfigurations(value: CcAccountAuditConfiguration.AuditCheckConfigurationsProperty) {
        this._auditCheckConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get auditCheckConfigurationsInput() {
        return this._auditCheckConfigurations.internalValue;
    }

    // audit_notification_target_configurations - computed: true, optional: true, required: false
    private _auditNotificationTargetConfigurations = new CcAccountAuditConfiguration.AuditNotificationTargetConfigurationsPropertyOutputReference(this, "audit_notification_target_configurations");
    public get auditNotificationTargetConfigurations() {
        return this._auditNotificationTargetConfigurations;
    }
    public putAuditNotificationTargetConfigurations(value: CcAccountAuditConfiguration.AuditNotificationTargetConfigurationsProperty) {
        this._auditNotificationTargetConfigurations.internalValue = value;
    }
    public resetAuditNotificationTargetConfigurations() {
        this._auditNotificationTargetConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditNotificationTargetConfigurationsInput() {
        return this._auditNotificationTargetConfigurations.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            account_id: cdktn.stringToTerraform(this._accountId),
            audit_check_configurations: ccAccountAuditConfigurationAuditCheckConfigurationsPropertyToTerraform(this._auditCheckConfigurations.internalValue),
            audit_notification_target_configurations: ccAccountAuditConfigurationAuditNotificationTargetConfigurationsPropertyToTerraform(this._auditNotificationTargetConfigurations.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_id: {
                value: cdktn.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            audit_check_configurations: {
                value: ccAccountAuditConfigurationAuditCheckConfigurationsPropertyToHclTerraform(this._auditCheckConfigurations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccountAuditConfiguration.AuditCheckConfigurationsProperty",
            },
            audit_notification_target_configurations: {
                value: ccAccountAuditConfigurationAuditNotificationTargetConfigurationsPropertyToHclTerraform(this._auditNotificationTargetConfigurations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccountAuditConfiguration.AuditNotificationTargetConfigurationsProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAccountAuditConfigurationAuditCheckConfigurationPropertyToTerraform(struct?: CcAccountAuditConfiguration.AuditCheckConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationAuditCheckConfigurationPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.AuditCheckConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationCaCertificateExpiringCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.CaCertificateExpiringCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationCaCertificateExpiringCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.CaCertificateExpiringCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationCaCertificateKeyQualityCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.CaCertificateKeyQualityCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationCaCertificateKeyQualityCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.CaCertificateKeyQualityCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationConflictingClientIdsCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.ConflictingClientIdsCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationConflictingClientIdsCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.ConflictingClientIdsCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationCertAgeCheckCustomConfigurationPropertyToTerraform(struct?: CcAccountAuditConfiguration.CertAgeCheckCustomConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cert_age_threshold_in_days: cdktn.stringToTerraform(struct!.certAgeThresholdInDays),
    }
}


export function ccAccountAuditConfigurationCertAgeCheckCustomConfigurationPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.CertAgeCheckCustomConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cert_age_threshold_in_days: {
            value: cdktn.stringToHclTerraform(struct!.certAgeThresholdInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationDeviceCertAgeAuditCheckConfigurationPropertyToTerraform(struct?: CcAccountAuditConfiguration.DeviceCertAgeAuditCheckConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration: ccAccountAuditConfigurationCertAgeCheckCustomConfigurationPropertyToTerraform(struct!.configuration),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationDeviceCertAgeAuditCheckConfigurationPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.DeviceCertAgeAuditCheckConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration: {
            value: ccAccountAuditConfigurationCertAgeCheckCustomConfigurationPropertyToHclTerraform(struct!.configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "CertAgeCheckCustomConfigurationProperty",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationCertExpirationCheckCustomConfigurationPropertyToTerraform(struct?: CcAccountAuditConfiguration.CertExpirationCheckCustomConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cert_expiration_threshold_in_days: cdktn.stringToTerraform(struct!.certExpirationThresholdInDays),
    }
}


export function ccAccountAuditConfigurationCertExpirationCheckCustomConfigurationPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.CertExpirationCheckCustomConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cert_expiration_threshold_in_days: {
            value: cdktn.stringToHclTerraform(struct!.certExpirationThresholdInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationDeviceCertExpirationAuditCheckConfigurationPropertyToTerraform(struct?: CcAccountAuditConfiguration.DeviceCertExpirationAuditCheckConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration: ccAccountAuditConfigurationCertExpirationCheckCustomConfigurationPropertyToTerraform(struct!.configuration),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationDeviceCertExpirationAuditCheckConfigurationPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.DeviceCertExpirationAuditCheckConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration: {
            value: ccAccountAuditConfigurationCertExpirationCheckCustomConfigurationPropertyToHclTerraform(struct!.configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "CertExpirationCheckCustomConfigurationProperty",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationDeviceCertificateKeyQualityCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.DeviceCertificateKeyQualityCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationDeviceCertificateKeyQualityCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.DeviceCertificateKeyQualityCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationDeviceCertificateSharedCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.DeviceCertificateSharedCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationDeviceCertificateSharedCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.DeviceCertificateSharedCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationIntermediateCaRevokedForActiveDeviceCertificatesCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.IntermediateCaRevokedForActiveDeviceCertificatesCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationIntermediateCaRevokedForActiveDeviceCertificatesCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.IntermediateCaRevokedForActiveDeviceCertificatesCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationIoTPolicyPotentialMisConfigurationCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.IoTPolicyPotentialMisConfigurationCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationIoTPolicyPotentialMisConfigurationCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.IoTPolicyPotentialMisConfigurationCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationIotPolicyOverlyPermissiveCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.IotPolicyOverlyPermissiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationIotPolicyOverlyPermissiveCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.IotPolicyOverlyPermissiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationIotRoleAliasAllowsAccessToUnusedServicesCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.IotRoleAliasAllowsAccessToUnusedServicesCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationIotRoleAliasAllowsAccessToUnusedServicesCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.IotRoleAliasAllowsAccessToUnusedServicesCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationIotRoleAliasOverlyPermissiveCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.IotRoleAliasOverlyPermissiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationIotRoleAliasOverlyPermissiveCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.IotRoleAliasOverlyPermissiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationLoggingDisabledCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.LoggingDisabledCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationLoggingDisabledCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.LoggingDisabledCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationRevokedCaCertificateStillActiveCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.RevokedCaCertificateStillActiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationRevokedCaCertificateStillActiveCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.RevokedCaCertificateStillActiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationRevokedDeviceCertificateStillActiveCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.RevokedDeviceCertificateStillActiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationRevokedDeviceCertificateStillActiveCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.RevokedDeviceCertificateStillActiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationUnauthenticatedCognitoRoleOverlyPermissiveCheckPropertyToTerraform(struct?: CcAccountAuditConfiguration.UnauthenticatedCognitoRoleOverlyPermissiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAccountAuditConfigurationUnauthenticatedCognitoRoleOverlyPermissiveCheckPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.UnauthenticatedCognitoRoleOverlyPermissiveCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationAuditCheckConfigurationsPropertyToTerraform(struct?: CcAccountAuditConfiguration.AuditCheckConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authenticated_cognito_role_overly_permissive_check: ccAccountAuditConfigurationAuditCheckConfigurationPropertyToTerraform(struct!.authenticatedCognitoRoleOverlyPermissiveCheck),
        ca_certificate_expiring_check: ccAccountAuditConfigurationCaCertificateExpiringCheckPropertyToTerraform(struct!.caCertificateExpiringCheck),
        ca_certificate_key_quality_check: ccAccountAuditConfigurationCaCertificateKeyQualityCheckPropertyToTerraform(struct!.caCertificateKeyQualityCheck),
        conflicting_client_ids_check: ccAccountAuditConfigurationConflictingClientIdsCheckPropertyToTerraform(struct!.conflictingClientIdsCheck),
        device_certificate_age_check: ccAccountAuditConfigurationDeviceCertAgeAuditCheckConfigurationPropertyToTerraform(struct!.deviceCertificateAgeCheck),
        device_certificate_expiring_check: ccAccountAuditConfigurationDeviceCertExpirationAuditCheckConfigurationPropertyToTerraform(struct!.deviceCertificateExpiringCheck),
        device_certificate_key_quality_check: ccAccountAuditConfigurationDeviceCertificateKeyQualityCheckPropertyToTerraform(struct!.deviceCertificateKeyQualityCheck),
        device_certificate_shared_check: ccAccountAuditConfigurationDeviceCertificateSharedCheckPropertyToTerraform(struct!.deviceCertificateSharedCheck),
        intermediate_ca_revoked_for_active_device_certificates_check: ccAccountAuditConfigurationIntermediateCaRevokedForActiveDeviceCertificatesCheckPropertyToTerraform(struct!.intermediateCaRevokedForActiveDeviceCertificatesCheck),
        io_t_policy_potential_mis_configuration_check: ccAccountAuditConfigurationIoTPolicyPotentialMisConfigurationCheckPropertyToTerraform(struct!.ioTPolicyPotentialMisConfigurationCheck),
        iot_policy_overly_permissive_check: ccAccountAuditConfigurationIotPolicyOverlyPermissiveCheckPropertyToTerraform(struct!.iotPolicyOverlyPermissiveCheck),
        iot_role_alias_allows_access_to_unused_services_check: ccAccountAuditConfigurationIotRoleAliasAllowsAccessToUnusedServicesCheckPropertyToTerraform(struct!.iotRoleAliasAllowsAccessToUnusedServicesCheck),
        iot_role_alias_overly_permissive_check: ccAccountAuditConfigurationIotRoleAliasOverlyPermissiveCheckPropertyToTerraform(struct!.iotRoleAliasOverlyPermissiveCheck),
        logging_disabled_check: ccAccountAuditConfigurationLoggingDisabledCheckPropertyToTerraform(struct!.loggingDisabledCheck),
        revoked_ca_certificate_still_active_check: ccAccountAuditConfigurationRevokedCaCertificateStillActiveCheckPropertyToTerraform(struct!.revokedCaCertificateStillActiveCheck),
        revoked_device_certificate_still_active_check: ccAccountAuditConfigurationRevokedDeviceCertificateStillActiveCheckPropertyToTerraform(struct!.revokedDeviceCertificateStillActiveCheck),
        unauthenticated_cognito_role_overly_permissive_check: ccAccountAuditConfigurationUnauthenticatedCognitoRoleOverlyPermissiveCheckPropertyToTerraform(struct!.unauthenticatedCognitoRoleOverlyPermissiveCheck),
    }
}


export function ccAccountAuditConfigurationAuditCheckConfigurationsPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.AuditCheckConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authenticated_cognito_role_overly_permissive_check: {
            value: ccAccountAuditConfigurationAuditCheckConfigurationPropertyToHclTerraform(struct!.authenticatedCognitoRoleOverlyPermissiveCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "AuditCheckConfigurationProperty",
        },
        ca_certificate_expiring_check: {
            value: ccAccountAuditConfigurationCaCertificateExpiringCheckPropertyToHclTerraform(struct!.caCertificateExpiringCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "CaCertificateExpiringCheckProperty",
        },
        ca_certificate_key_quality_check: {
            value: ccAccountAuditConfigurationCaCertificateKeyQualityCheckPropertyToHclTerraform(struct!.caCertificateKeyQualityCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "CaCertificateKeyQualityCheckProperty",
        },
        conflicting_client_ids_check: {
            value: ccAccountAuditConfigurationConflictingClientIdsCheckPropertyToHclTerraform(struct!.conflictingClientIdsCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "ConflictingClientIdsCheckProperty",
        },
        device_certificate_age_check: {
            value: ccAccountAuditConfigurationDeviceCertAgeAuditCheckConfigurationPropertyToHclTerraform(struct!.deviceCertificateAgeCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "DeviceCertAgeAuditCheckConfigurationProperty",
        },
        device_certificate_expiring_check: {
            value: ccAccountAuditConfigurationDeviceCertExpirationAuditCheckConfigurationPropertyToHclTerraform(struct!.deviceCertificateExpiringCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "DeviceCertExpirationAuditCheckConfigurationProperty",
        },
        device_certificate_key_quality_check: {
            value: ccAccountAuditConfigurationDeviceCertificateKeyQualityCheckPropertyToHclTerraform(struct!.deviceCertificateKeyQualityCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "DeviceCertificateKeyQualityCheckProperty",
        },
        device_certificate_shared_check: {
            value: ccAccountAuditConfigurationDeviceCertificateSharedCheckPropertyToHclTerraform(struct!.deviceCertificateSharedCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "DeviceCertificateSharedCheckProperty",
        },
        intermediate_ca_revoked_for_active_device_certificates_check: {
            value: ccAccountAuditConfigurationIntermediateCaRevokedForActiveDeviceCertificatesCheckPropertyToHclTerraform(struct!.intermediateCaRevokedForActiveDeviceCertificatesCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "IntermediateCaRevokedForActiveDeviceCertificatesCheckProperty",
        },
        io_t_policy_potential_mis_configuration_check: {
            value: ccAccountAuditConfigurationIoTPolicyPotentialMisConfigurationCheckPropertyToHclTerraform(struct!.ioTPolicyPotentialMisConfigurationCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "IoTPolicyPotentialMisConfigurationCheckProperty",
        },
        iot_policy_overly_permissive_check: {
            value: ccAccountAuditConfigurationIotPolicyOverlyPermissiveCheckPropertyToHclTerraform(struct!.iotPolicyOverlyPermissiveCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "IotPolicyOverlyPermissiveCheckProperty",
        },
        iot_role_alias_allows_access_to_unused_services_check: {
            value: ccAccountAuditConfigurationIotRoleAliasAllowsAccessToUnusedServicesCheckPropertyToHclTerraform(struct!.iotRoleAliasAllowsAccessToUnusedServicesCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "IotRoleAliasAllowsAccessToUnusedServicesCheckProperty",
        },
        iot_role_alias_overly_permissive_check: {
            value: ccAccountAuditConfigurationIotRoleAliasOverlyPermissiveCheckPropertyToHclTerraform(struct!.iotRoleAliasOverlyPermissiveCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "IotRoleAliasOverlyPermissiveCheckProperty",
        },
        logging_disabled_check: {
            value: ccAccountAuditConfigurationLoggingDisabledCheckPropertyToHclTerraform(struct!.loggingDisabledCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "LoggingDisabledCheckProperty",
        },
        revoked_ca_certificate_still_active_check: {
            value: ccAccountAuditConfigurationRevokedCaCertificateStillActiveCheckPropertyToHclTerraform(struct!.revokedCaCertificateStillActiveCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "RevokedCaCertificateStillActiveCheckProperty",
        },
        revoked_device_certificate_still_active_check: {
            value: ccAccountAuditConfigurationRevokedDeviceCertificateStillActiveCheckPropertyToHclTerraform(struct!.revokedDeviceCertificateStillActiveCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "RevokedDeviceCertificateStillActiveCheckProperty",
        },
        unauthenticated_cognito_role_overly_permissive_check: {
            value: ccAccountAuditConfigurationUnauthenticatedCognitoRoleOverlyPermissiveCheckPropertyToHclTerraform(struct!.unauthenticatedCognitoRoleOverlyPermissiveCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "UnauthenticatedCognitoRoleOverlyPermissiveCheckProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationAuditNotificationTargetPropertyToTerraform(struct?: CcAccountAuditConfiguration.AuditNotificationTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccAccountAuditConfigurationAuditNotificationTargetPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.AuditNotificationTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccountAuditConfigurationAuditNotificationTargetConfigurationsPropertyToTerraform(struct?: CcAccountAuditConfiguration.AuditNotificationTargetConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sns: ccAccountAuditConfigurationAuditNotificationTargetPropertyToTerraform(struct!.sns),
    }
}


export function ccAccountAuditConfigurationAuditNotificationTargetConfigurationsPropertyToHclTerraform(struct?: CcAccountAuditConfiguration.AuditNotificationTargetConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sns: {
            value: ccAccountAuditConfigurationAuditNotificationTargetPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "AuditNotificationTargetProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAccountAuditConfiguration {
export interface AuditCheckConfigurationProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class AuditCheckConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuditCheckConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuditCheckConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface CaCertificateExpiringCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class CaCertificateExpiringCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CaCertificateExpiringCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CaCertificateExpiringCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface CaCertificateKeyQualityCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class CaCertificateKeyQualityCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CaCertificateKeyQualityCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CaCertificateKeyQualityCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface ConflictingClientIdsCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class ConflictingClientIdsCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConflictingClientIdsCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConflictingClientIdsCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface CertAgeCheckCustomConfigurationProperty {
    /**
    * The configValue for configuring audit checks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#cert_age_threshold_in_days CcAccountAuditConfiguration#cert_age_threshold_in_days}
    */
    readonly certAgeThresholdInDays?: string;
}
export class CertAgeCheckCustomConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertAgeCheckCustomConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certAgeThresholdInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.certAgeThresholdInDays = this._certAgeThresholdInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertAgeCheckCustomConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certAgeThresholdInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certAgeThresholdInDays = value.certAgeThresholdInDays;
        }
    }

    // cert_age_threshold_in_days - computed: true, optional: true, required: false
    private _certAgeThresholdInDays?: string; 
    public get certAgeThresholdInDays() {
        return this.getStringAttribute('cert_age_threshold_in_days');
    }
    public set certAgeThresholdInDays(value: string) {
        this._certAgeThresholdInDays = value;
    }
    public resetCertAgeThresholdInDays() {
        this._certAgeThresholdInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certAgeThresholdInDaysInput() {
        return this._certAgeThresholdInDays;
    }
}
export interface DeviceCertAgeAuditCheckConfigurationProperty {
    /**
    * A structure containing the configName and corresponding configValue for configuring audit checks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#configuration CcAccountAuditConfiguration#configuration}
    */
    readonly configuration?: CertAgeCheckCustomConfigurationProperty;
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class DeviceCertAgeAuditCheckConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeviceCertAgeAuditCheckConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeviceCertAgeAuditCheckConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configuration.internalValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configuration.internalValue = value.configuration;
            this._enabled = value.enabled;
        }
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CertAgeCheckCustomConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CertAgeCheckCustomConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface CertExpirationCheckCustomConfigurationProperty {
    /**
    * The configValue for configuring audit checks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#cert_expiration_threshold_in_days CcAccountAuditConfiguration#cert_expiration_threshold_in_days}
    */
    readonly certExpirationThresholdInDays?: string;
}
export class CertExpirationCheckCustomConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertExpirationCheckCustomConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certExpirationThresholdInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.certExpirationThresholdInDays = this._certExpirationThresholdInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertExpirationCheckCustomConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certExpirationThresholdInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certExpirationThresholdInDays = value.certExpirationThresholdInDays;
        }
    }

    // cert_expiration_threshold_in_days - computed: true, optional: true, required: false
    private _certExpirationThresholdInDays?: string; 
    public get certExpirationThresholdInDays() {
        return this.getStringAttribute('cert_expiration_threshold_in_days');
    }
    public set certExpirationThresholdInDays(value: string) {
        this._certExpirationThresholdInDays = value;
    }
    public resetCertExpirationThresholdInDays() {
        this._certExpirationThresholdInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certExpirationThresholdInDaysInput() {
        return this._certExpirationThresholdInDays;
    }
}
export interface DeviceCertExpirationAuditCheckConfigurationProperty {
    /**
    * A structure containing the configName and corresponding configValue for configuring audit checks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#configuration CcAccountAuditConfiguration#configuration}
    */
    readonly configuration?: CertExpirationCheckCustomConfigurationProperty;
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class DeviceCertExpirationAuditCheckConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeviceCertExpirationAuditCheckConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeviceCertExpirationAuditCheckConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configuration.internalValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configuration.internalValue = value.configuration;
            this._enabled = value.enabled;
        }
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CertExpirationCheckCustomConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CertExpirationCheckCustomConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface DeviceCertificateKeyQualityCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class DeviceCertificateKeyQualityCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeviceCertificateKeyQualityCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeviceCertificateKeyQualityCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface DeviceCertificateSharedCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class DeviceCertificateSharedCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeviceCertificateSharedCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeviceCertificateSharedCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface IntermediateCaRevokedForActiveDeviceCertificatesCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class IntermediateCaRevokedForActiveDeviceCertificatesCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntermediateCaRevokedForActiveDeviceCertificatesCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntermediateCaRevokedForActiveDeviceCertificatesCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface IoTPolicyPotentialMisConfigurationCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class IoTPolicyPotentialMisConfigurationCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IoTPolicyPotentialMisConfigurationCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IoTPolicyPotentialMisConfigurationCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface IotPolicyOverlyPermissiveCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class IotPolicyOverlyPermissiveCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotPolicyOverlyPermissiveCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotPolicyOverlyPermissiveCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface IotRoleAliasAllowsAccessToUnusedServicesCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class IotRoleAliasAllowsAccessToUnusedServicesCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotRoleAliasAllowsAccessToUnusedServicesCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotRoleAliasAllowsAccessToUnusedServicesCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface IotRoleAliasOverlyPermissiveCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class IotRoleAliasOverlyPermissiveCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotRoleAliasOverlyPermissiveCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotRoleAliasOverlyPermissiveCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface LoggingDisabledCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class LoggingDisabledCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingDisabledCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingDisabledCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface RevokedCaCertificateStillActiveCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class RevokedCaCertificateStillActiveCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RevokedCaCertificateStillActiveCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RevokedCaCertificateStillActiveCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface RevokedDeviceCertificateStillActiveCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class RevokedDeviceCertificateStillActiveCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RevokedDeviceCertificateStillActiveCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RevokedDeviceCertificateStillActiveCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface UnauthenticatedCognitoRoleOverlyPermissiveCheckProperty {
    /**
    * True if the check is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class UnauthenticatedCognitoRoleOverlyPermissiveCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UnauthenticatedCognitoRoleOverlyPermissiveCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UnauthenticatedCognitoRoleOverlyPermissiveCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface AuditCheckConfigurationsProperty {
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#authenticated_cognito_role_overly_permissive_check CcAccountAuditConfiguration#authenticated_cognito_role_overly_permissive_check}
    */
    readonly authenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfigurationProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#ca_certificate_expiring_check CcAccountAuditConfiguration#ca_certificate_expiring_check}
    */
    readonly caCertificateExpiringCheck?: CaCertificateExpiringCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#ca_certificate_key_quality_check CcAccountAuditConfiguration#ca_certificate_key_quality_check}
    */
    readonly caCertificateKeyQualityCheck?: CaCertificateKeyQualityCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#conflicting_client_ids_check CcAccountAuditConfiguration#conflicting_client_ids_check}
    */
    readonly conflictingClientIdsCheck?: ConflictingClientIdsCheckProperty;
    /**
    * A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#device_certificate_age_check CcAccountAuditConfiguration#device_certificate_age_check}
    */
    readonly deviceCertificateAgeCheck?: DeviceCertAgeAuditCheckConfigurationProperty;
    /**
    * A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#device_certificate_expiring_check CcAccountAuditConfiguration#device_certificate_expiring_check}
    */
    readonly deviceCertificateExpiringCheck?: DeviceCertExpirationAuditCheckConfigurationProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#device_certificate_key_quality_check CcAccountAuditConfiguration#device_certificate_key_quality_check}
    */
    readonly deviceCertificateKeyQualityCheck?: DeviceCertificateKeyQualityCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#device_certificate_shared_check CcAccountAuditConfiguration#device_certificate_shared_check}
    */
    readonly deviceCertificateSharedCheck?: DeviceCertificateSharedCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#intermediate_ca_revoked_for_active_device_certificates_check CcAccountAuditConfiguration#intermediate_ca_revoked_for_active_device_certificates_check}
    */
    readonly intermediateCaRevokedForActiveDeviceCertificatesCheck?: IntermediateCaRevokedForActiveDeviceCertificatesCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#io_t_policy_potential_mis_configuration_check CcAccountAuditConfiguration#io_t_policy_potential_mis_configuration_check}
    */
    readonly ioTPolicyPotentialMisConfigurationCheck?: IoTPolicyPotentialMisConfigurationCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#iot_policy_overly_permissive_check CcAccountAuditConfiguration#iot_policy_overly_permissive_check}
    */
    readonly iotPolicyOverlyPermissiveCheck?: IotPolicyOverlyPermissiveCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#iot_role_alias_allows_access_to_unused_services_check CcAccountAuditConfiguration#iot_role_alias_allows_access_to_unused_services_check}
    */
    readonly iotRoleAliasAllowsAccessToUnusedServicesCheck?: IotRoleAliasAllowsAccessToUnusedServicesCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#iot_role_alias_overly_permissive_check CcAccountAuditConfiguration#iot_role_alias_overly_permissive_check}
    */
    readonly iotRoleAliasOverlyPermissiveCheck?: IotRoleAliasOverlyPermissiveCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#logging_disabled_check CcAccountAuditConfiguration#logging_disabled_check}
    */
    readonly loggingDisabledCheck?: LoggingDisabledCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#revoked_ca_certificate_still_active_check CcAccountAuditConfiguration#revoked_ca_certificate_still_active_check}
    */
    readonly revokedCaCertificateStillActiveCheck?: RevokedCaCertificateStillActiveCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#revoked_device_certificate_still_active_check CcAccountAuditConfiguration#revoked_device_certificate_still_active_check}
    */
    readonly revokedDeviceCertificateStillActiveCheck?: RevokedDeviceCertificateStillActiveCheckProperty;
    /**
    * The configuration for a specific audit check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#unauthenticated_cognito_role_overly_permissive_check CcAccountAuditConfiguration#unauthenticated_cognito_role_overly_permissive_check}
    */
    readonly unauthenticatedCognitoRoleOverlyPermissiveCheck?: UnauthenticatedCognitoRoleOverlyPermissiveCheckProperty;
}
export class AuditCheckConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuditCheckConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticatedCognitoRoleOverlyPermissiveCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticatedCognitoRoleOverlyPermissiveCheck = this._authenticatedCognitoRoleOverlyPermissiveCheck?.internalValue;
        }
        if (this._caCertificateExpiringCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.caCertificateExpiringCheck = this._caCertificateExpiringCheck?.internalValue;
        }
        if (this._caCertificateKeyQualityCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.caCertificateKeyQualityCheck = this._caCertificateKeyQualityCheck?.internalValue;
        }
        if (this._conflictingClientIdsCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conflictingClientIdsCheck = this._conflictingClientIdsCheck?.internalValue;
        }
        if (this._deviceCertificateAgeCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceCertificateAgeCheck = this._deviceCertificateAgeCheck?.internalValue;
        }
        if (this._deviceCertificateExpiringCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceCertificateExpiringCheck = this._deviceCertificateExpiringCheck?.internalValue;
        }
        if (this._deviceCertificateKeyQualityCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceCertificateKeyQualityCheck = this._deviceCertificateKeyQualityCheck?.internalValue;
        }
        if (this._deviceCertificateSharedCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceCertificateSharedCheck = this._deviceCertificateSharedCheck?.internalValue;
        }
        if (this._intermediateCaRevokedForActiveDeviceCertificatesCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.intermediateCaRevokedForActiveDeviceCertificatesCheck = this._intermediateCaRevokedForActiveDeviceCertificatesCheck?.internalValue;
        }
        if (this._ioTPolicyPotentialMisConfigurationCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ioTPolicyPotentialMisConfigurationCheck = this._ioTPolicyPotentialMisConfigurationCheck?.internalValue;
        }
        if (this._iotPolicyOverlyPermissiveCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotPolicyOverlyPermissiveCheck = this._iotPolicyOverlyPermissiveCheck?.internalValue;
        }
        if (this._iotRoleAliasAllowsAccessToUnusedServicesCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotRoleAliasAllowsAccessToUnusedServicesCheck = this._iotRoleAliasAllowsAccessToUnusedServicesCheck?.internalValue;
        }
        if (this._iotRoleAliasOverlyPermissiveCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotRoleAliasOverlyPermissiveCheck = this._iotRoleAliasOverlyPermissiveCheck?.internalValue;
        }
        if (this._loggingDisabledCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingDisabledCheck = this._loggingDisabledCheck?.internalValue;
        }
        if (this._revokedCaCertificateStillActiveCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.revokedCaCertificateStillActiveCheck = this._revokedCaCertificateStillActiveCheck?.internalValue;
        }
        if (this._revokedDeviceCertificateStillActiveCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.revokedDeviceCertificateStillActiveCheck = this._revokedDeviceCertificateStillActiveCheck?.internalValue;
        }
        if (this._unauthenticatedCognitoRoleOverlyPermissiveCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.unauthenticatedCognitoRoleOverlyPermissiveCheck = this._unauthenticatedCognitoRoleOverlyPermissiveCheck?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuditCheckConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue = undefined;
            this._caCertificateExpiringCheck.internalValue = undefined;
            this._caCertificateKeyQualityCheck.internalValue = undefined;
            this._conflictingClientIdsCheck.internalValue = undefined;
            this._deviceCertificateAgeCheck.internalValue = undefined;
            this._deviceCertificateExpiringCheck.internalValue = undefined;
            this._deviceCertificateKeyQualityCheck.internalValue = undefined;
            this._deviceCertificateSharedCheck.internalValue = undefined;
            this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue = undefined;
            this._ioTPolicyPotentialMisConfigurationCheck.internalValue = undefined;
            this._iotPolicyOverlyPermissiveCheck.internalValue = undefined;
            this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue = undefined;
            this._iotRoleAliasOverlyPermissiveCheck.internalValue = undefined;
            this._loggingDisabledCheck.internalValue = undefined;
            this._revokedCaCertificateStillActiveCheck.internalValue = undefined;
            this._revokedDeviceCertificateStillActiveCheck.internalValue = undefined;
            this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue = value.authenticatedCognitoRoleOverlyPermissiveCheck;
            this._caCertificateExpiringCheck.internalValue = value.caCertificateExpiringCheck;
            this._caCertificateKeyQualityCheck.internalValue = value.caCertificateKeyQualityCheck;
            this._conflictingClientIdsCheck.internalValue = value.conflictingClientIdsCheck;
            this._deviceCertificateAgeCheck.internalValue = value.deviceCertificateAgeCheck;
            this._deviceCertificateExpiringCheck.internalValue = value.deviceCertificateExpiringCheck;
            this._deviceCertificateKeyQualityCheck.internalValue = value.deviceCertificateKeyQualityCheck;
            this._deviceCertificateSharedCheck.internalValue = value.deviceCertificateSharedCheck;
            this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue = value.intermediateCaRevokedForActiveDeviceCertificatesCheck;
            this._ioTPolicyPotentialMisConfigurationCheck.internalValue = value.ioTPolicyPotentialMisConfigurationCheck;
            this._iotPolicyOverlyPermissiveCheck.internalValue = value.iotPolicyOverlyPermissiveCheck;
            this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue = value.iotRoleAliasAllowsAccessToUnusedServicesCheck;
            this._iotRoleAliasOverlyPermissiveCheck.internalValue = value.iotRoleAliasOverlyPermissiveCheck;
            this._loggingDisabledCheck.internalValue = value.loggingDisabledCheck;
            this._revokedCaCertificateStillActiveCheck.internalValue = value.revokedCaCertificateStillActiveCheck;
            this._revokedDeviceCertificateStillActiveCheck.internalValue = value.revokedDeviceCertificateStillActiveCheck;
            this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue = value.unauthenticatedCognitoRoleOverlyPermissiveCheck;
        }
    }

    // authenticated_cognito_role_overly_permissive_check - computed: true, optional: true, required: false
    private _authenticatedCognitoRoleOverlyPermissiveCheck = new AuditCheckConfigurationPropertyOutputReference(this, "authenticated_cognito_role_overly_permissive_check");
    public get authenticatedCognitoRoleOverlyPermissiveCheck() {
        return this._authenticatedCognitoRoleOverlyPermissiveCheck;
    }
    public putAuthenticatedCognitoRoleOverlyPermissiveCheck(value: AuditCheckConfigurationProperty) {
        this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue = value;
    }
    public resetAuthenticatedCognitoRoleOverlyPermissiveCheck() {
        this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticatedCognitoRoleOverlyPermissiveCheckInput() {
        return this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue;
    }

    // ca_certificate_expiring_check - computed: true, optional: true, required: false
    private _caCertificateExpiringCheck = new CaCertificateExpiringCheckPropertyOutputReference(this, "ca_certificate_expiring_check");
    public get caCertificateExpiringCheck() {
        return this._caCertificateExpiringCheck;
    }
    public putCaCertificateExpiringCheck(value: CaCertificateExpiringCheckProperty) {
        this._caCertificateExpiringCheck.internalValue = value;
    }
    public resetCaCertificateExpiringCheck() {
        this._caCertificateExpiringCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificateExpiringCheckInput() {
        return this._caCertificateExpiringCheck.internalValue;
    }

    // ca_certificate_key_quality_check - computed: true, optional: true, required: false
    private _caCertificateKeyQualityCheck = new CaCertificateKeyQualityCheckPropertyOutputReference(this, "ca_certificate_key_quality_check");
    public get caCertificateKeyQualityCheck() {
        return this._caCertificateKeyQualityCheck;
    }
    public putCaCertificateKeyQualityCheck(value: CaCertificateKeyQualityCheckProperty) {
        this._caCertificateKeyQualityCheck.internalValue = value;
    }
    public resetCaCertificateKeyQualityCheck() {
        this._caCertificateKeyQualityCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificateKeyQualityCheckInput() {
        return this._caCertificateKeyQualityCheck.internalValue;
    }

    // conflicting_client_ids_check - computed: true, optional: true, required: false
    private _conflictingClientIdsCheck = new ConflictingClientIdsCheckPropertyOutputReference(this, "conflicting_client_ids_check");
    public get conflictingClientIdsCheck() {
        return this._conflictingClientIdsCheck;
    }
    public putConflictingClientIdsCheck(value: ConflictingClientIdsCheckProperty) {
        this._conflictingClientIdsCheck.internalValue = value;
    }
    public resetConflictingClientIdsCheck() {
        this._conflictingClientIdsCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conflictingClientIdsCheckInput() {
        return this._conflictingClientIdsCheck.internalValue;
    }

    // device_certificate_age_check - computed: true, optional: true, required: false
    private _deviceCertificateAgeCheck = new DeviceCertAgeAuditCheckConfigurationPropertyOutputReference(this, "device_certificate_age_check");
    public get deviceCertificateAgeCheck() {
        return this._deviceCertificateAgeCheck;
    }
    public putDeviceCertificateAgeCheck(value: DeviceCertAgeAuditCheckConfigurationProperty) {
        this._deviceCertificateAgeCheck.internalValue = value;
    }
    public resetDeviceCertificateAgeCheck() {
        this._deviceCertificateAgeCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceCertificateAgeCheckInput() {
        return this._deviceCertificateAgeCheck.internalValue;
    }

    // device_certificate_expiring_check - computed: true, optional: true, required: false
    private _deviceCertificateExpiringCheck = new DeviceCertExpirationAuditCheckConfigurationPropertyOutputReference(this, "device_certificate_expiring_check");
    public get deviceCertificateExpiringCheck() {
        return this._deviceCertificateExpiringCheck;
    }
    public putDeviceCertificateExpiringCheck(value: DeviceCertExpirationAuditCheckConfigurationProperty) {
        this._deviceCertificateExpiringCheck.internalValue = value;
    }
    public resetDeviceCertificateExpiringCheck() {
        this._deviceCertificateExpiringCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceCertificateExpiringCheckInput() {
        return this._deviceCertificateExpiringCheck.internalValue;
    }

    // device_certificate_key_quality_check - computed: true, optional: true, required: false
    private _deviceCertificateKeyQualityCheck = new DeviceCertificateKeyQualityCheckPropertyOutputReference(this, "device_certificate_key_quality_check");
    public get deviceCertificateKeyQualityCheck() {
        return this._deviceCertificateKeyQualityCheck;
    }
    public putDeviceCertificateKeyQualityCheck(value: DeviceCertificateKeyQualityCheckProperty) {
        this._deviceCertificateKeyQualityCheck.internalValue = value;
    }
    public resetDeviceCertificateKeyQualityCheck() {
        this._deviceCertificateKeyQualityCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceCertificateKeyQualityCheckInput() {
        return this._deviceCertificateKeyQualityCheck.internalValue;
    }

    // device_certificate_shared_check - computed: true, optional: true, required: false
    private _deviceCertificateSharedCheck = new DeviceCertificateSharedCheckPropertyOutputReference(this, "device_certificate_shared_check");
    public get deviceCertificateSharedCheck() {
        return this._deviceCertificateSharedCheck;
    }
    public putDeviceCertificateSharedCheck(value: DeviceCertificateSharedCheckProperty) {
        this._deviceCertificateSharedCheck.internalValue = value;
    }
    public resetDeviceCertificateSharedCheck() {
        this._deviceCertificateSharedCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceCertificateSharedCheckInput() {
        return this._deviceCertificateSharedCheck.internalValue;
    }

    // intermediate_ca_revoked_for_active_device_certificates_check - computed: true, optional: true, required: false
    private _intermediateCaRevokedForActiveDeviceCertificatesCheck = new IntermediateCaRevokedForActiveDeviceCertificatesCheckPropertyOutputReference(this, "intermediate_ca_revoked_for_active_device_certificates_check");
    public get intermediateCaRevokedForActiveDeviceCertificatesCheck() {
        return this._intermediateCaRevokedForActiveDeviceCertificatesCheck;
    }
    public putIntermediateCaRevokedForActiveDeviceCertificatesCheck(value: IntermediateCaRevokedForActiveDeviceCertificatesCheckProperty) {
        this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue = value;
    }
    public resetIntermediateCaRevokedForActiveDeviceCertificatesCheck() {
        this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intermediateCaRevokedForActiveDeviceCertificatesCheckInput() {
        return this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue;
    }

    // io_t_policy_potential_mis_configuration_check - computed: true, optional: true, required: false
    private _ioTPolicyPotentialMisConfigurationCheck = new IoTPolicyPotentialMisConfigurationCheckPropertyOutputReference(this, "io_t_policy_potential_mis_configuration_check");
    public get ioTPolicyPotentialMisConfigurationCheck() {
        return this._ioTPolicyPotentialMisConfigurationCheck;
    }
    public putIoTPolicyPotentialMisConfigurationCheck(value: IoTPolicyPotentialMisConfigurationCheckProperty) {
        this._ioTPolicyPotentialMisConfigurationCheck.internalValue = value;
    }
    public resetIoTPolicyPotentialMisConfigurationCheck() {
        this._ioTPolicyPotentialMisConfigurationCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ioTPolicyPotentialMisConfigurationCheckInput() {
        return this._ioTPolicyPotentialMisConfigurationCheck.internalValue;
    }

    // iot_policy_overly_permissive_check - computed: true, optional: true, required: false
    private _iotPolicyOverlyPermissiveCheck = new IotPolicyOverlyPermissiveCheckPropertyOutputReference(this, "iot_policy_overly_permissive_check");
    public get iotPolicyOverlyPermissiveCheck() {
        return this._iotPolicyOverlyPermissiveCheck;
    }
    public putIotPolicyOverlyPermissiveCheck(value: IotPolicyOverlyPermissiveCheckProperty) {
        this._iotPolicyOverlyPermissiveCheck.internalValue = value;
    }
    public resetIotPolicyOverlyPermissiveCheck() {
        this._iotPolicyOverlyPermissiveCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotPolicyOverlyPermissiveCheckInput() {
        return this._iotPolicyOverlyPermissiveCheck.internalValue;
    }

    // iot_role_alias_allows_access_to_unused_services_check - computed: true, optional: true, required: false
    private _iotRoleAliasAllowsAccessToUnusedServicesCheck = new IotRoleAliasAllowsAccessToUnusedServicesCheckPropertyOutputReference(this, "iot_role_alias_allows_access_to_unused_services_check");
    public get iotRoleAliasAllowsAccessToUnusedServicesCheck() {
        return this._iotRoleAliasAllowsAccessToUnusedServicesCheck;
    }
    public putIotRoleAliasAllowsAccessToUnusedServicesCheck(value: IotRoleAliasAllowsAccessToUnusedServicesCheckProperty) {
        this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue = value;
    }
    public resetIotRoleAliasAllowsAccessToUnusedServicesCheck() {
        this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotRoleAliasAllowsAccessToUnusedServicesCheckInput() {
        return this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue;
    }

    // iot_role_alias_overly_permissive_check - computed: true, optional: true, required: false
    private _iotRoleAliasOverlyPermissiveCheck = new IotRoleAliasOverlyPermissiveCheckPropertyOutputReference(this, "iot_role_alias_overly_permissive_check");
    public get iotRoleAliasOverlyPermissiveCheck() {
        return this._iotRoleAliasOverlyPermissiveCheck;
    }
    public putIotRoleAliasOverlyPermissiveCheck(value: IotRoleAliasOverlyPermissiveCheckProperty) {
        this._iotRoleAliasOverlyPermissiveCheck.internalValue = value;
    }
    public resetIotRoleAliasOverlyPermissiveCheck() {
        this._iotRoleAliasOverlyPermissiveCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotRoleAliasOverlyPermissiveCheckInput() {
        return this._iotRoleAliasOverlyPermissiveCheck.internalValue;
    }

    // logging_disabled_check - computed: true, optional: true, required: false
    private _loggingDisabledCheck = new LoggingDisabledCheckPropertyOutputReference(this, "logging_disabled_check");
    public get loggingDisabledCheck() {
        return this._loggingDisabledCheck;
    }
    public putLoggingDisabledCheck(value: LoggingDisabledCheckProperty) {
        this._loggingDisabledCheck.internalValue = value;
    }
    public resetLoggingDisabledCheck() {
        this._loggingDisabledCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingDisabledCheckInput() {
        return this._loggingDisabledCheck.internalValue;
    }

    // revoked_ca_certificate_still_active_check - computed: true, optional: true, required: false
    private _revokedCaCertificateStillActiveCheck = new RevokedCaCertificateStillActiveCheckPropertyOutputReference(this, "revoked_ca_certificate_still_active_check");
    public get revokedCaCertificateStillActiveCheck() {
        return this._revokedCaCertificateStillActiveCheck;
    }
    public putRevokedCaCertificateStillActiveCheck(value: RevokedCaCertificateStillActiveCheckProperty) {
        this._revokedCaCertificateStillActiveCheck.internalValue = value;
    }
    public resetRevokedCaCertificateStillActiveCheck() {
        this._revokedCaCertificateStillActiveCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revokedCaCertificateStillActiveCheckInput() {
        return this._revokedCaCertificateStillActiveCheck.internalValue;
    }

    // revoked_device_certificate_still_active_check - computed: true, optional: true, required: false
    private _revokedDeviceCertificateStillActiveCheck = new RevokedDeviceCertificateStillActiveCheckPropertyOutputReference(this, "revoked_device_certificate_still_active_check");
    public get revokedDeviceCertificateStillActiveCheck() {
        return this._revokedDeviceCertificateStillActiveCheck;
    }
    public putRevokedDeviceCertificateStillActiveCheck(value: RevokedDeviceCertificateStillActiveCheckProperty) {
        this._revokedDeviceCertificateStillActiveCheck.internalValue = value;
    }
    public resetRevokedDeviceCertificateStillActiveCheck() {
        this._revokedDeviceCertificateStillActiveCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revokedDeviceCertificateStillActiveCheckInput() {
        return this._revokedDeviceCertificateStillActiveCheck.internalValue;
    }

    // unauthenticated_cognito_role_overly_permissive_check - computed: true, optional: true, required: false
    private _unauthenticatedCognitoRoleOverlyPermissiveCheck = new UnauthenticatedCognitoRoleOverlyPermissiveCheckPropertyOutputReference(this, "unauthenticated_cognito_role_overly_permissive_check");
    public get unauthenticatedCognitoRoleOverlyPermissiveCheck() {
        return this._unauthenticatedCognitoRoleOverlyPermissiveCheck;
    }
    public putUnauthenticatedCognitoRoleOverlyPermissiveCheck(value: UnauthenticatedCognitoRoleOverlyPermissiveCheckProperty) {
        this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue = value;
    }
    public resetUnauthenticatedCognitoRoleOverlyPermissiveCheck() {
        this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unauthenticatedCognitoRoleOverlyPermissiveCheckInput() {
        return this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue;
    }
}
export interface AuditNotificationTargetProperty {
    /**
    * True if notifications to the target are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled CcAccountAuditConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The ARN of the role that grants permission to send notifications to the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#role_arn CcAccountAuditConfiguration#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the target (SNS topic) to which audit notifications are sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#target_arn CcAccountAuditConfiguration#target_arn}
    */
    readonly targetArn?: string;
}
export class AuditNotificationTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuditNotificationTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuditNotificationTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._roleArn = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._roleArn = value.roleArn;
            this._targetArn = value.targetArn;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
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

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface AuditNotificationTargetConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#sns CcAccountAuditConfiguration#sns}
    */
    readonly sns?: AuditNotificationTargetProperty;
}
export class AuditNotificationTargetConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuditNotificationTargetConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuditNotificationTargetConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sns.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sns.internalValue = value.sns;
        }
    }

    // sns - computed: true, optional: true, required: false
    private _sns = new AuditNotificationTargetPropertyOutputReference(this, "sns");
    public get sns() {
        return this._sns;
    }
    public putSns(value: AuditNotificationTargetProperty) {
        this._sns.internalValue = value;
    }
    public resetSns() {
        this._sns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
        return this._sns.internalValue;
    }
}
}
