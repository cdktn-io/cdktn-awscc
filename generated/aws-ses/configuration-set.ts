// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationSetProps extends cdktn.TerraformMetaArguments {
    /**
    * An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#archiving_options CcConfigurationSet#archiving_options}
    */
    readonly archivingOptions?: CcConfigurationSet.ArchivingOptionsProperty;
    /**
    * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#delivery_options CcConfigurationSet#delivery_options}
    */
    readonly deliveryOptions?: CcConfigurationSet.DeliveryOptionsProperty;
    /**
    * The name of the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#name CcConfigurationSet#name}
    */
    readonly name?: string;
    /**
    * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#reputation_options CcConfigurationSet#reputation_options}
    */
    readonly reputationOptions?: CcConfigurationSet.ReputationOptionsProperty;
    /**
    * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#sending_options CcConfigurationSet#sending_options}
    */
    readonly sendingOptions?: CcConfigurationSet.SendingOptionsProperty;
    /**
    * An object that contains information about the suppression list preferences for your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#suppression_options CcConfigurationSet#suppression_options}
    */
    readonly suppressionOptions?: CcConfigurationSet.SuppressionOptionsProperty;
    /**
    * The tags (keys and values) associated with the contact list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#tags CcConfigurationSet#tags}
    */
    readonly tags?: CcConfigurationSet.TagProperty[] | cdktn.IResolvable;
    /**
    * An object that defines the open and click tracking options for emails that you send using the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#tracking_options CcConfigurationSet#tracking_options}
    */
    readonly trackingOptions?: CcConfigurationSet.TrackingOptionsProperty;
    /**
    * An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#vdm_options CcConfigurationSet#vdm_options}
    */
    readonly vdmOptions?: CcConfigurationSet.VdmOptionsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set awscc_ses_configuration_set}
*/
export class CcConfigurationSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_configuration_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigurationSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigurationSet to import
    * @param importFromId The id of the existing CcConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigurationSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_configuration_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set awscc_ses_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationSetProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationSetProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_configuration_set',
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
        this._archivingOptions.internalValue = config.archivingOptions;
        this._deliveryOptions.internalValue = config.deliveryOptions;
        this._name = config.name;
        this._reputationOptions.internalValue = config.reputationOptions;
        this._sendingOptions.internalValue = config.sendingOptions;
        this._suppressionOptions.internalValue = config.suppressionOptions;
        this._tags.internalValue = config.tags;
        this._trackingOptions.internalValue = config.trackingOptions;
        this._vdmOptions.internalValue = config.vdmOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // archiving_options - computed: true, optional: true, required: false
    private _archivingOptions = new CcConfigurationSet.ArchivingOptionsPropertyOutputReference(this, "archiving_options");
    public get archivingOptions() {
        return this._archivingOptions;
    }
    public putArchivingOptions(value: CcConfigurationSet.ArchivingOptionsProperty) {
        this._archivingOptions.internalValue = value;
    }
    public resetArchivingOptions() {
        this._archivingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get archivingOptionsInput() {
        return this._archivingOptions.internalValue;
    }

    // delivery_options - computed: true, optional: true, required: false
    private _deliveryOptions = new CcConfigurationSet.DeliveryOptionsPropertyOutputReference(this, "delivery_options");
    public get deliveryOptions() {
        return this._deliveryOptions;
    }
    public putDeliveryOptions(value: CcConfigurationSet.DeliveryOptionsProperty) {
        this._deliveryOptions.internalValue = value;
    }
    public resetDeliveryOptions() {
        this._deliveryOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryOptionsInput() {
        return this._deliveryOptions.internalValue;
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

    // reputation_options - computed: true, optional: true, required: false
    private _reputationOptions = new CcConfigurationSet.ReputationOptionsPropertyOutputReference(this, "reputation_options");
    public get reputationOptions() {
        return this._reputationOptions;
    }
    public putReputationOptions(value: CcConfigurationSet.ReputationOptionsProperty) {
        this._reputationOptions.internalValue = value;
    }
    public resetReputationOptions() {
        this._reputationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reputationOptionsInput() {
        return this._reputationOptions.internalValue;
    }

    // sending_options - computed: true, optional: true, required: false
    private _sendingOptions = new CcConfigurationSet.SendingOptionsPropertyOutputReference(this, "sending_options");
    public get sendingOptions() {
        return this._sendingOptions;
    }
    public putSendingOptions(value: CcConfigurationSet.SendingOptionsProperty) {
        this._sendingOptions.internalValue = value;
    }
    public resetSendingOptions() {
        this._sendingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sendingOptionsInput() {
        return this._sendingOptions.internalValue;
    }

    // suppression_options - computed: true, optional: true, required: false
    private _suppressionOptions = new CcConfigurationSet.SuppressionOptionsPropertyOutputReference(this, "suppression_options");
    public get suppressionOptions() {
        return this._suppressionOptions;
    }
    public putSuppressionOptions(value: CcConfigurationSet.SuppressionOptionsProperty) {
        this._suppressionOptions.internalValue = value;
    }
    public resetSuppressionOptions() {
        this._suppressionOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suppressionOptionsInput() {
        return this._suppressionOptions.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfigurationSet.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfigurationSet.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tracking_options - computed: true, optional: true, required: false
    private _trackingOptions = new CcConfigurationSet.TrackingOptionsPropertyOutputReference(this, "tracking_options");
    public get trackingOptions() {
        return this._trackingOptions;
    }
    public putTrackingOptions(value: CcConfigurationSet.TrackingOptionsProperty) {
        this._trackingOptions.internalValue = value;
    }
    public resetTrackingOptions() {
        this._trackingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trackingOptionsInput() {
        return this._trackingOptions.internalValue;
    }

    // vdm_options - computed: true, optional: true, required: false
    private _vdmOptions = new CcConfigurationSet.VdmOptionsPropertyOutputReference(this, "vdm_options");
    public get vdmOptions() {
        return this._vdmOptions;
    }
    public putVdmOptions(value: CcConfigurationSet.VdmOptionsProperty) {
        this._vdmOptions.internalValue = value;
    }
    public resetVdmOptions() {
        this._vdmOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vdmOptionsInput() {
        return this._vdmOptions.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            archiving_options: ccConfigurationSetArchivingOptionsPropertyToTerraform(this._archivingOptions.internalValue),
            delivery_options: ccConfigurationSetDeliveryOptionsPropertyToTerraform(this._deliveryOptions.internalValue),
            name: cdktn.stringToTerraform(this._name),
            reputation_options: ccConfigurationSetReputationOptionsPropertyToTerraform(this._reputationOptions.internalValue),
            sending_options: ccConfigurationSetSendingOptionsPropertyToTerraform(this._sendingOptions.internalValue),
            suppression_options: ccConfigurationSetSuppressionOptionsPropertyToTerraform(this._suppressionOptions.internalValue),
            tags: cdktn.listMapper(ccConfigurationSetTagPropertyToTerraform, false)(this._tags.internalValue),
            tracking_options: ccConfigurationSetTrackingOptionsPropertyToTerraform(this._trackingOptions.internalValue),
            vdm_options: ccConfigurationSetVdmOptionsPropertyToTerraform(this._vdmOptions.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            archiving_options: {
                value: ccConfigurationSetArchivingOptionsPropertyToHclTerraform(this._archivingOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationSet.ArchivingOptionsProperty",
            },
            delivery_options: {
                value: ccConfigurationSetDeliveryOptionsPropertyToHclTerraform(this._deliveryOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationSet.DeliveryOptionsProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            reputation_options: {
                value: ccConfigurationSetReputationOptionsPropertyToHclTerraform(this._reputationOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationSet.ReputationOptionsProperty",
            },
            sending_options: {
                value: ccConfigurationSetSendingOptionsPropertyToHclTerraform(this._sendingOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationSet.SendingOptionsProperty",
            },
            suppression_options: {
                value: ccConfigurationSetSuppressionOptionsPropertyToHclTerraform(this._suppressionOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationSet.SuppressionOptionsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfigurationSetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationSet.TagPropertyList",
            },
            tracking_options: {
                value: ccConfigurationSetTrackingOptionsPropertyToHclTerraform(this._trackingOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationSet.TrackingOptionsProperty",
            },
            vdm_options: {
                value: ccConfigurationSetVdmOptionsPropertyToHclTerraform(this._vdmOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationSet.VdmOptionsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigurationSetArchivingOptionsPropertyToTerraform(struct?: CcConfigurationSet.ArchivingOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        archive_arn: cdktn.stringToTerraform(struct!.archiveArn),
    }
}


export function ccConfigurationSetArchivingOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.ArchivingOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        archive_arn: {
            value: cdktn.stringToHclTerraform(struct!.archiveArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetDeliveryOptionsPropertyToTerraform(struct?: CcConfigurationSet.DeliveryOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_delivery_seconds: cdktn.numberToTerraform(struct!.maxDeliverySeconds),
        sending_pool_name: cdktn.stringToTerraform(struct!.sendingPoolName),
        tls_policy: cdktn.stringToTerraform(struct!.tlsPolicy),
    }
}


export function ccConfigurationSetDeliveryOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.DeliveryOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_delivery_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maxDeliverySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sending_pool_name: {
            value: cdktn.stringToHclTerraform(struct!.sendingPoolName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tls_policy: {
            value: cdktn.stringToHclTerraform(struct!.tlsPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetReputationOptionsPropertyToTerraform(struct?: CcConfigurationSet.ReputationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reputation_metrics_enabled: cdktn.booleanToTerraform(struct!.reputationMetricsEnabled),
    }
}


export function ccConfigurationSetReputationOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.ReputationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reputation_metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.reputationMetricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetSendingOptionsPropertyToTerraform(struct?: CcConfigurationSet.SendingOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sending_enabled: cdktn.booleanToTerraform(struct!.sendingEnabled),
    }
}


export function ccConfigurationSetSendingOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.SendingOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sending_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.sendingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetOverallConfidenceThresholdPropertyToTerraform(struct?: CcConfigurationSet.OverallConfidenceThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        confidence_verdict_threshold: cdktn.stringToTerraform(struct!.confidenceVerdictThreshold),
    }
}


export function ccConfigurationSetOverallConfidenceThresholdPropertyToHclTerraform(struct?: CcConfigurationSet.OverallConfidenceThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        confidence_verdict_threshold: {
            value: cdktn.stringToHclTerraform(struct!.confidenceVerdictThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetConditionThresholdPropertyToTerraform(struct?: CcConfigurationSet.ConditionThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        condition_threshold_enabled: cdktn.stringToTerraform(struct!.conditionThresholdEnabled),
        overall_confidence_threshold: ccConfigurationSetOverallConfidenceThresholdPropertyToTerraform(struct!.overallConfidenceThreshold),
    }
}


export function ccConfigurationSetConditionThresholdPropertyToHclTerraform(struct?: CcConfigurationSet.ConditionThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        condition_threshold_enabled: {
            value: cdktn.stringToHclTerraform(struct!.conditionThresholdEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overall_confidence_threshold: {
            value: ccConfigurationSetOverallConfidenceThresholdPropertyToHclTerraform(struct!.overallConfidenceThreshold),
            isBlock: true,
            type: "struct",
            storageClassType: "OverallConfidenceThresholdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetValidationOptionsPropertyToTerraform(struct?: CcConfigurationSet.ValidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        condition_threshold: ccConfigurationSetConditionThresholdPropertyToTerraform(struct!.conditionThreshold),
    }
}


export function ccConfigurationSetValidationOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.ValidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        condition_threshold: {
            value: ccConfigurationSetConditionThresholdPropertyToHclTerraform(struct!.conditionThreshold),
            isBlock: true,
            type: "struct",
            storageClassType: "ConditionThresholdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetSuppressionOptionsPropertyToTerraform(struct?: CcConfigurationSet.SuppressionOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        suppressed_reasons: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.suppressedReasons),
        validation_options: ccConfigurationSetValidationOptionsPropertyToTerraform(struct!.validationOptions),
    }
}


export function ccConfigurationSetSuppressionOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.SuppressionOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        suppressed_reasons: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.suppressedReasons),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        validation_options: {
            value: ccConfigurationSetValidationOptionsPropertyToHclTerraform(struct!.validationOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "ValidationOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetTagPropertyToTerraform(struct?: CcConfigurationSet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfigurationSetTagPropertyToHclTerraform(struct?: CcConfigurationSet.TagProperty | cdktn.IResolvable): any {
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


export function ccConfigurationSetTrackingOptionsPropertyToTerraform(struct?: CcConfigurationSet.TrackingOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_redirect_domain: cdktn.stringToTerraform(struct!.customRedirectDomain),
        https_policy: cdktn.stringToTerraform(struct!.httpsPolicy),
    }
}


export function ccConfigurationSetTrackingOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.TrackingOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_redirect_domain: {
            value: cdktn.stringToHclTerraform(struct!.customRedirectDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        https_policy: {
            value: cdktn.stringToHclTerraform(struct!.httpsPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetDashboardOptionsPropertyToTerraform(struct?: CcConfigurationSet.DashboardOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        engagement_metrics: cdktn.stringToTerraform(struct!.engagementMetrics),
    }
}


export function ccConfigurationSetDashboardOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.DashboardOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        engagement_metrics: {
            value: cdktn.stringToHclTerraform(struct!.engagementMetrics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetGuardianOptionsPropertyToTerraform(struct?: CcConfigurationSet.GuardianOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        optimized_shared_delivery: cdktn.stringToTerraform(struct!.optimizedSharedDelivery),
    }
}


export function ccConfigurationSetGuardianOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.GuardianOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        optimized_shared_delivery: {
            value: cdktn.stringToHclTerraform(struct!.optimizedSharedDelivery),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetVdmOptionsPropertyToTerraform(struct?: CcConfigurationSet.VdmOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dashboard_options: ccConfigurationSetDashboardOptionsPropertyToTerraform(struct!.dashboardOptions),
        guardian_options: ccConfigurationSetGuardianOptionsPropertyToTerraform(struct!.guardianOptions),
    }
}


export function ccConfigurationSetVdmOptionsPropertyToHclTerraform(struct?: CcConfigurationSet.VdmOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dashboard_options: {
            value: ccConfigurationSetDashboardOptionsPropertyToHclTerraform(struct!.dashboardOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "DashboardOptionsProperty",
        },
        guardian_options: {
            value: ccConfigurationSetGuardianOptionsPropertyToHclTerraform(struct!.guardianOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "GuardianOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConfigurationSet {
export interface ArchivingOptionsProperty {
    /**
    * The ARN of the MailManager archive to associate with the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#archive_arn CcConfigurationSet#archive_arn}
    */
    readonly archiveArn?: string;
}
export class ArchivingOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArchivingOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._archiveArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.archiveArn = this._archiveArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArchivingOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._archiveArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._archiveArn = value.archiveArn;
        }
    }

    // archive_arn - computed: true, optional: true, required: false
    private _archiveArn?: string; 
    public get archiveArn() {
        return this.getStringAttribute('archive_arn');
    }
    public set archiveArn(value: string) {
        this._archiveArn = value;
    }
    public resetArchiveArn() {
        this._archiveArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get archiveArnInput() {
        return this._archiveArn;
    }
}
export interface DeliveryOptionsProperty {
    /**
    * Specifies the maximum time until which SES will retry sending emails
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#max_delivery_seconds CcConfigurationSet#max_delivery_seconds}
    */
    readonly maxDeliverySeconds?: number;
    /**
    * The name of the dedicated IP pool to associate with the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#sending_pool_name CcConfigurationSet#sending_pool_name}
    */
    readonly sendingPoolName?: string;
    /**
    * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#tls_policy CcConfigurationSet#tls_policy}
    */
    readonly tlsPolicy?: string;
}
export class DeliveryOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeliveryOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxDeliverySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxDeliverySeconds = this._maxDeliverySeconds;
        }
        if (this._sendingPoolName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sendingPoolName = this._sendingPoolName;
        }
        if (this._tlsPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.tlsPolicy = this._tlsPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeliveryOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxDeliverySeconds = undefined;
            this._sendingPoolName = undefined;
            this._tlsPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxDeliverySeconds = value.maxDeliverySeconds;
            this._sendingPoolName = value.sendingPoolName;
            this._tlsPolicy = value.tlsPolicy;
        }
    }

    // max_delivery_seconds - computed: true, optional: true, required: false
    private _maxDeliverySeconds?: number; 
    public get maxDeliverySeconds() {
        return this.getNumberAttribute('max_delivery_seconds');
    }
    public set maxDeliverySeconds(value: number) {
        this._maxDeliverySeconds = value;
    }
    public resetMaxDeliverySeconds() {
        this._maxDeliverySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxDeliverySecondsInput() {
        return this._maxDeliverySeconds;
    }

    // sending_pool_name - computed: true, optional: true, required: false
    private _sendingPoolName?: string; 
    public get sendingPoolName() {
        return this.getStringAttribute('sending_pool_name');
    }
    public set sendingPoolName(value: string) {
        this._sendingPoolName = value;
    }
    public resetSendingPoolName() {
        this._sendingPoolName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sendingPoolNameInput() {
        return this._sendingPoolName;
    }

    // tls_policy - computed: true, optional: true, required: false
    private _tlsPolicy?: string; 
    public get tlsPolicy() {
        return this.getStringAttribute('tls_policy');
    }
    public set tlsPolicy(value: string) {
        this._tlsPolicy = value;
    }
    public resetTlsPolicy() {
        this._tlsPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsPolicyInput() {
        return this._tlsPolicy;
    }
}
export interface ReputationOptionsProperty {
    /**
    * If true , tracking of reputation metrics is enabled for the configuration set. If false , tracking of reputation metrics is disabled for the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#reputation_metrics_enabled CcConfigurationSet#reputation_metrics_enabled}
    */
    readonly reputationMetricsEnabled?: boolean | cdktn.IResolvable;
}
export class ReputationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReputationOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reputationMetricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.reputationMetricsEnabled = this._reputationMetricsEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReputationOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reputationMetricsEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reputationMetricsEnabled = value.reputationMetricsEnabled;
        }
    }

    // reputation_metrics_enabled - computed: true, optional: true, required: false
    private _reputationMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get reputationMetricsEnabled() {
        return this.getBooleanAttribute('reputation_metrics_enabled');
    }
    public set reputationMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._reputationMetricsEnabled = value;
    }
    public resetReputationMetricsEnabled() {
        this._reputationMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reputationMetricsEnabledInput() {
        return this._reputationMetricsEnabled;
    }
}
export interface SendingOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#sending_enabled CcConfigurationSet#sending_enabled}
    */
    readonly sendingEnabled?: boolean | cdktn.IResolvable;
}
export class SendingOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SendingOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sendingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.sendingEnabled = this._sendingEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SendingOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sendingEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sendingEnabled = value.sendingEnabled;
        }
    }

    // sending_enabled - computed: true, optional: true, required: false
    private _sendingEnabled?: boolean | cdktn.IResolvable; 
    public get sendingEnabled() {
        return this.getBooleanAttribute('sending_enabled');
    }
    public set sendingEnabled(value: boolean | cdktn.IResolvable) {
        this._sendingEnabled = value;
    }
    public resetSendingEnabled() {
        this._sendingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sendingEnabledInput() {
        return this._sendingEnabled;
    }
}
export interface OverallConfidenceThresholdProperty {
    /**
    * The confidence verdict threshold level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#confidence_verdict_threshold CcConfigurationSet#confidence_verdict_threshold}
    */
    readonly confidenceVerdictThreshold?: string;
}
export class OverallConfidenceThresholdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverallConfidenceThresholdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._confidenceVerdictThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.confidenceVerdictThreshold = this._confidenceVerdictThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverallConfidenceThresholdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._confidenceVerdictThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._confidenceVerdictThreshold = value.confidenceVerdictThreshold;
        }
    }

    // confidence_verdict_threshold - computed: true, optional: true, required: false
    private _confidenceVerdictThreshold?: string; 
    public get confidenceVerdictThreshold() {
        return this.getStringAttribute('confidence_verdict_threshold');
    }
    public set confidenceVerdictThreshold(value: string) {
        this._confidenceVerdictThreshold = value;
    }
    public resetConfidenceVerdictThreshold() {
        this._confidenceVerdictThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confidenceVerdictThresholdInput() {
        return this._confidenceVerdictThreshold;
    }
}
export interface ConditionThresholdProperty {
    /**
    * Whether the condition threshold is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#condition_threshold_enabled CcConfigurationSet#condition_threshold_enabled}
    */
    readonly conditionThresholdEnabled?: string;
    /**
    * The overall confidence threshold settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#overall_confidence_threshold CcConfigurationSet#overall_confidence_threshold}
    */
    readonly overallConfidenceThreshold?: OverallConfidenceThresholdProperty;
}
export class ConditionThresholdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConditionThresholdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditionThresholdEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditionThresholdEnabled = this._conditionThresholdEnabled;
        }
        if (this._overallConfidenceThreshold?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overallConfidenceThreshold = this._overallConfidenceThreshold?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionThresholdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditionThresholdEnabled = undefined;
            this._overallConfidenceThreshold.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditionThresholdEnabled = value.conditionThresholdEnabled;
            this._overallConfidenceThreshold.internalValue = value.overallConfidenceThreshold;
        }
    }

    // condition_threshold_enabled - computed: true, optional: true, required: false
    private _conditionThresholdEnabled?: string; 
    public get conditionThresholdEnabled() {
        return this.getStringAttribute('condition_threshold_enabled');
    }
    public set conditionThresholdEnabled(value: string) {
        this._conditionThresholdEnabled = value;
    }
    public resetConditionThresholdEnabled() {
        this._conditionThresholdEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionThresholdEnabledInput() {
        return this._conditionThresholdEnabled;
    }

    // overall_confidence_threshold - computed: true, optional: true, required: false
    private _overallConfidenceThreshold = new OverallConfidenceThresholdPropertyOutputReference(this, "overall_confidence_threshold");
    public get overallConfidenceThreshold() {
        return this._overallConfidenceThreshold;
    }
    public putOverallConfidenceThreshold(value: OverallConfidenceThresholdProperty) {
        this._overallConfidenceThreshold.internalValue = value;
    }
    public resetOverallConfidenceThreshold() {
        this._overallConfidenceThreshold.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overallConfidenceThresholdInput() {
        return this._overallConfidenceThreshold.internalValue;
    }
}
export interface ValidationOptionsProperty {
    /**
    * The condition threshold settings for suppression validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#condition_threshold CcConfigurationSet#condition_threshold}
    */
    readonly conditionThreshold?: ConditionThresholdProperty;
}
export class ValidationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidationOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditionThreshold?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditionThreshold = this._conditionThreshold?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditionThreshold.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditionThreshold.internalValue = value.conditionThreshold;
        }
    }

    // condition_threshold - computed: true, optional: true, required: false
    private _conditionThreshold = new ConditionThresholdPropertyOutputReference(this, "condition_threshold");
    public get conditionThreshold() {
        return this._conditionThreshold;
    }
    public putConditionThreshold(value: ConditionThresholdProperty) {
        this._conditionThreshold.internalValue = value;
    }
    public resetConditionThreshold() {
        this._conditionThreshold.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionThresholdInput() {
        return this._conditionThreshold.internalValue;
    }
}
export interface SuppressionOptionsProperty {
    /**
    * A list that contains the reasons that email addresses are automatically added to the suppression list for your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#suppressed_reasons CcConfigurationSet#suppressed_reasons}
    */
    readonly suppressedReasons?: string[];
    /**
    * An object that contains information about the validation options for your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#validation_options CcConfigurationSet#validation_options}
    */
    readonly validationOptions?: ValidationOptionsProperty;
}
export class SuppressionOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SuppressionOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._suppressedReasons !== undefined) {
            hasAnyValues = true;
            internalValueResult.suppressedReasons = this._suppressedReasons;
        }
        if (this._validationOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationOptions = this._validationOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SuppressionOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._suppressedReasons = undefined;
            this._validationOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._suppressedReasons = value.suppressedReasons;
            this._validationOptions.internalValue = value.validationOptions;
        }
    }

    // suppressed_reasons - computed: true, optional: true, required: false
    private _suppressedReasons?: string[]; 
    public get suppressedReasons() {
        return this.getListAttribute('suppressed_reasons');
    }
    public set suppressedReasons(value: string[]) {
        this._suppressedReasons = value;
    }
    public resetSuppressedReasons() {
        this._suppressedReasons = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suppressedReasonsInput() {
        return this._suppressedReasons;
    }

    // validation_options - computed: true, optional: true, required: false
    private _validationOptions = new ValidationOptionsPropertyOutputReference(this, "validation_options");
    public get validationOptions() {
        return this._validationOptions;
    }
    public putValidationOptions(value: ValidationOptionsProperty) {
        this._validationOptions.internalValue = value;
    }
    public resetValidationOptions() {
        this._validationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationOptionsInput() {
        return this._validationOptions.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#key CcConfigurationSet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#value CcConfigurationSet#value}
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
export interface TrackingOptionsProperty {
    /**
    * The domain to use for tracking open and click events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#custom_redirect_domain CcConfigurationSet#custom_redirect_domain}
    */
    readonly customRedirectDomain?: string;
    /**
    * The https policy to use for tracking open and click events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#https_policy CcConfigurationSet#https_policy}
    */
    readonly httpsPolicy?: string;
}
export class TrackingOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrackingOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customRedirectDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.customRedirectDomain = this._customRedirectDomain;
        }
        if (this._httpsPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpsPolicy = this._httpsPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrackingOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customRedirectDomain = undefined;
            this._httpsPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customRedirectDomain = value.customRedirectDomain;
            this._httpsPolicy = value.httpsPolicy;
        }
    }

    // custom_redirect_domain - computed: true, optional: true, required: false
    private _customRedirectDomain?: string; 
    public get customRedirectDomain() {
        return this.getStringAttribute('custom_redirect_domain');
    }
    public set customRedirectDomain(value: string) {
        this._customRedirectDomain = value;
    }
    public resetCustomRedirectDomain() {
        this._customRedirectDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customRedirectDomainInput() {
        return this._customRedirectDomain;
    }

    // https_policy - computed: true, optional: true, required: false
    private _httpsPolicy?: string; 
    public get httpsPolicy() {
        return this.getStringAttribute('https_policy');
    }
    public set httpsPolicy(value: string) {
        this._httpsPolicy = value;
    }
    public resetHttpsPolicy() {
        this._httpsPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpsPolicyInput() {
        return this._httpsPolicy;
    }
}
export interface DashboardOptionsProperty {
    /**
    * Whether emails sent with this configuration set have engagement tracking enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#engagement_metrics CcConfigurationSet#engagement_metrics}
    */
    readonly engagementMetrics?: string;
}
export class DashboardOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashboardOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._engagementMetrics !== undefined) {
            hasAnyValues = true;
            internalValueResult.engagementMetrics = this._engagementMetrics;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashboardOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._engagementMetrics = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._engagementMetrics = value.engagementMetrics;
        }
    }

    // engagement_metrics - computed: true, optional: true, required: false
    private _engagementMetrics?: string; 
    public get engagementMetrics() {
        return this.getStringAttribute('engagement_metrics');
    }
    public set engagementMetrics(value: string) {
        this._engagementMetrics = value;
    }
    public resetEngagementMetrics() {
        this._engagementMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engagementMetricsInput() {
        return this._engagementMetrics;
    }
}
export interface GuardianOptionsProperty {
    /**
    * Whether emails sent with this configuration set have optimized delivery algorithm enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#optimized_shared_delivery CcConfigurationSet#optimized_shared_delivery}
    */
    readonly optimizedSharedDelivery?: string;
}
export class GuardianOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GuardianOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._optimizedSharedDelivery !== undefined) {
            hasAnyValues = true;
            internalValueResult.optimizedSharedDelivery = this._optimizedSharedDelivery;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GuardianOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._optimizedSharedDelivery = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._optimizedSharedDelivery = value.optimizedSharedDelivery;
        }
    }

    // optimized_shared_delivery - computed: true, optional: true, required: false
    private _optimizedSharedDelivery?: string; 
    public get optimizedSharedDelivery() {
        return this.getStringAttribute('optimized_shared_delivery');
    }
    public set optimizedSharedDelivery(value: string) {
        this._optimizedSharedDelivery = value;
    }
    public resetOptimizedSharedDelivery() {
        this._optimizedSharedDelivery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optimizedSharedDeliveryInput() {
        return this._optimizedSharedDelivery;
    }
}
export interface VdmOptionsProperty {
    /**
    * Preferences regarding the Dashboard feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#dashboard_options CcConfigurationSet#dashboard_options}
    */
    readonly dashboardOptions?: DashboardOptionsProperty;
    /**
    * Preferences regarding the Guardian feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_configuration_set#guardian_options CcConfigurationSet#guardian_options}
    */
    readonly guardianOptions?: GuardianOptionsProperty;
}
export class VdmOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VdmOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dashboardOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dashboardOptions = this._dashboardOptions?.internalValue;
        }
        if (this._guardianOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.guardianOptions = this._guardianOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VdmOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dashboardOptions.internalValue = undefined;
            this._guardianOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dashboardOptions.internalValue = value.dashboardOptions;
            this._guardianOptions.internalValue = value.guardianOptions;
        }
    }

    // dashboard_options - computed: true, optional: true, required: false
    private _dashboardOptions = new DashboardOptionsPropertyOutputReference(this, "dashboard_options");
    public get dashboardOptions() {
        return this._dashboardOptions;
    }
    public putDashboardOptions(value: DashboardOptionsProperty) {
        this._dashboardOptions.internalValue = value;
    }
    public resetDashboardOptions() {
        this._dashboardOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardOptionsInput() {
        return this._dashboardOptions.internalValue;
    }

    // guardian_options - computed: true, optional: true, required: false
    private _guardianOptions = new GuardianOptionsPropertyOutputReference(this, "guardian_options");
    public get guardianOptions() {
        return this._guardianOptions;
    }
    public putGuardianOptions(value: GuardianOptionsProperty) {
        this._guardianOptions.internalValue = value;
    }
    public resetGuardianOptions() {
        this._guardianOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guardianOptionsInput() {
        return this._guardianOptions.internalValue;
    }
}
}
