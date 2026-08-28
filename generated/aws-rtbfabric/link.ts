// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLinkProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#gateway_id CcLink#gateway_id}
    */
    readonly gatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#http_responder_allowed CcLink#http_responder_allowed}
    */
    readonly httpResponderAllowed?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#link_attributes CcLink#link_attributes}
    */
    readonly linkAttributes?: CcLink.LinkAttributesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#link_log_settings CcLink#link_log_settings}
    */
    readonly linkLogSettings: CcLink.LinkLogSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#module_configuration_list CcLink#module_configuration_list}
    */
    readonly moduleConfigurationList?: CcLink.ModuleConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#peer_gateway_id CcLink#peer_gateway_id}
    */
    readonly peerGatewayId: string;
    /**
    * Tags to assign to the Link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#tags CcLink#tags}
    */
    readonly tags?: CcLink.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link awscc_rtbfabric_link}
*/
export class CcLink extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rtbfabric_link";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLink resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLink to import
    * @param importFromId The id of the existing CcLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLink to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_link", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link awscc_rtbfabric_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLinkProps
    */
    public constructor(scope: Construct, id: string, config: CcLinkProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rtbfabric_link',
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
        this._gatewayId = config.gatewayId;
        this._httpResponderAllowed = config.httpResponderAllowed;
        this._linkAttributes.internalValue = config.linkAttributes;
        this._linkLogSettings.internalValue = config.linkLogSettings;
        this._moduleConfigurationList.internalValue = config.moduleConfigurationList;
        this._peerGatewayId = config.peerGatewayId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // gateway_id - computed: false, optional: false, required: true
    private _gatewayId?: string; 
    public get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    public set gatewayId(value: string) {
        this._gatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayIdInput() {
        return this._gatewayId;
    }

    // http_responder_allowed - computed: true, optional: true, required: false
    private _httpResponderAllowed?: boolean | cdktn.IResolvable; 
    public get httpResponderAllowed() {
        return this.getBooleanAttribute('http_responder_allowed');
    }
    public set httpResponderAllowed(value: boolean | cdktn.IResolvable) {
        this._httpResponderAllowed = value;
    }
    public resetHttpResponderAllowed() {
        this._httpResponderAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpResponderAllowedInput() {
        return this._httpResponderAllowed;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // link_attributes - computed: true, optional: true, required: false
    private _linkAttributes = new CcLink.LinkAttributesPropertyOutputReference(this, "link_attributes");
    public get linkAttributes() {
        return this._linkAttributes;
    }
    public putLinkAttributes(value: CcLink.LinkAttributesProperty) {
        this._linkAttributes.internalValue = value;
    }
    public resetLinkAttributes() {
        this._linkAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkAttributesInput() {
        return this._linkAttributes.internalValue;
    }

    // link_direction - computed: true, optional: false, required: false
    public get linkDirection() {
        return this.getStringAttribute('link_direction');
    }

    // link_id - computed: true, optional: false, required: false
    public get linkId() {
        return this.getStringAttribute('link_id');
    }

    // link_log_settings - computed: false, optional: false, required: true
    private _linkLogSettings = new CcLink.LinkLogSettingsPropertyOutputReference(this, "link_log_settings");
    public get linkLogSettings() {
        return this._linkLogSettings;
    }
    public putLinkLogSettings(value: CcLink.LinkLogSettingsProperty) {
        this._linkLogSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get linkLogSettingsInput() {
        return this._linkLogSettings.internalValue;
    }

    // link_status - computed: true, optional: false, required: false
    public get linkStatus() {
        return this.getStringAttribute('link_status');
    }

    // module_configuration_list - computed: true, optional: true, required: false
    private _moduleConfigurationList = new CcLink.ModuleConfigurationPropertyList(this, "module_configuration_list", false);
    public get moduleConfigurationList() {
        return this._moduleConfigurationList;
    }
    public putModuleConfigurationList(value: CcLink.ModuleConfigurationProperty[] | cdktn.IResolvable) {
        this._moduleConfigurationList.internalValue = value;
    }
    public resetModuleConfigurationList() {
        this._moduleConfigurationList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get moduleConfigurationListInput() {
        return this._moduleConfigurationList.internalValue;
    }

    // peer_gateway_id - computed: false, optional: false, required: true
    private _peerGatewayId?: string; 
    public get peerGatewayId() {
        return this.getStringAttribute('peer_gateway_id');
    }
    public set peerGatewayId(value: string) {
        this._peerGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerGatewayIdInput() {
        return this._peerGatewayId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLink.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLink.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_timestamp - computed: true, optional: false, required: false
    public get updatedTimestamp() {
        return this.getStringAttribute('updated_timestamp');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            gateway_id: cdktn.stringToTerraform(this._gatewayId),
            http_responder_allowed: cdktn.booleanToTerraform(this._httpResponderAllowed),
            link_attributes: ccLinkLinkAttributesPropertyToTerraform(this._linkAttributes.internalValue),
            link_log_settings: ccLinkLinkLogSettingsPropertyToTerraform(this._linkLogSettings.internalValue),
            module_configuration_list: cdktn.listMapper(ccLinkModuleConfigurationPropertyToTerraform, false)(this._moduleConfigurationList.internalValue),
            peer_gateway_id: cdktn.stringToTerraform(this._peerGatewayId),
            tags: cdktn.listMapper(ccLinkTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            gateway_id: {
                value: cdktn.stringToHclTerraform(this._gatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            http_responder_allowed: {
                value: cdktn.booleanToHclTerraform(this._httpResponderAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            link_attributes: {
                value: ccLinkLinkAttributesPropertyToHclTerraform(this._linkAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLink.LinkAttributesProperty",
            },
            link_log_settings: {
                value: ccLinkLinkLogSettingsPropertyToHclTerraform(this._linkLogSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLink.LinkLogSettingsProperty",
            },
            module_configuration_list: {
                value: cdktn.listMapperHcl(ccLinkModuleConfigurationPropertyToHclTerraform, false)(this._moduleConfigurationList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLink.ModuleConfigurationPropertyList",
            },
            peer_gateway_id: {
                value: cdktn.stringToHclTerraform(this._peerGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLinkTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLink.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLinkResponderErrorMaskingForHttpCodePropertyToTerraform(struct?: CcLink.ResponderErrorMaskingForHttpCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        http_code: cdktn.stringToTerraform(struct!.httpCode),
        logging_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.loggingTypes),
        response_logging_percentage: cdktn.numberToTerraform(struct!.responseLoggingPercentage),
    }
}


export function ccLinkResponderErrorMaskingForHttpCodePropertyToHclTerraform(struct?: CcLink.ResponderErrorMaskingForHttpCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_code: {
            value: cdktn.stringToHclTerraform(struct!.httpCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logging_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.loggingTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        response_logging_percentage: {
            value: cdktn.numberToHclTerraform(struct!.responseLoggingPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkLinkAttributesPropertyToTerraform(struct?: CcLink.LinkAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_provided_id: cdktn.stringToTerraform(struct!.customerProvidedId),
        responder_error_masking: cdktn.listMapper(ccLinkResponderErrorMaskingForHttpCodePropertyToTerraform, false)(struct!.responderErrorMasking),
    }
}


export function ccLinkLinkAttributesPropertyToHclTerraform(struct?: CcLink.LinkAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_provided_id: {
            value: cdktn.stringToHclTerraform(struct!.customerProvidedId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        responder_error_masking: {
            value: cdktn.listMapperHcl(ccLinkResponderErrorMaskingForHttpCodePropertyToHclTerraform, false)(struct!.responderErrorMasking),
            isBlock: true,
            type: "list",
            storageClassType: "ResponderErrorMaskingForHttpCodePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkLinkApplicationLogSamplingPropertyToTerraform(struct?: CcLink.LinkApplicationLogSamplingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_log: cdktn.numberToTerraform(struct!.errorLog),
        filter_log: cdktn.numberToTerraform(struct!.filterLog),
    }
}


export function ccLinkLinkApplicationLogSamplingPropertyToHclTerraform(struct?: CcLink.LinkApplicationLogSamplingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_log: {
            value: cdktn.numberToHclTerraform(struct!.errorLog),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        filter_log: {
            value: cdktn.numberToHclTerraform(struct!.filterLog),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkApplicationLogsPropertyToTerraform(struct?: CcLink.ApplicationLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        link_application_log_sampling: ccLinkLinkApplicationLogSamplingPropertyToTerraform(struct!.linkApplicationLogSampling),
    }
}


export function ccLinkApplicationLogsPropertyToHclTerraform(struct?: CcLink.ApplicationLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        link_application_log_sampling: {
            value: ccLinkLinkApplicationLogSamplingPropertyToHclTerraform(struct!.linkApplicationLogSampling),
            isBlock: true,
            type: "struct",
            storageClassType: "LinkApplicationLogSamplingProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkLinkLogSettingsPropertyToTerraform(struct?: CcLink.LinkLogSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_logs: ccLinkApplicationLogsPropertyToTerraform(struct!.applicationLogs),
    }
}


export function ccLinkLinkLogSettingsPropertyToHclTerraform(struct?: CcLink.LinkLogSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_logs: {
            value: ccLinkApplicationLogsPropertyToHclTerraform(struct!.applicationLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "ApplicationLogsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkNoBidModuleParametersPropertyToTerraform(struct?: CcLink.NoBidModuleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pass_through_percentage: cdktn.numberToTerraform(struct!.passThroughPercentage),
        reason: cdktn.stringToTerraform(struct!.reason),
        reason_code: cdktn.numberToTerraform(struct!.reasonCode),
    }
}


export function ccLinkNoBidModuleParametersPropertyToHclTerraform(struct?: CcLink.NoBidModuleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pass_through_percentage: {
            value: cdktn.numberToHclTerraform(struct!.passThroughPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reason: {
            value: cdktn.stringToHclTerraform(struct!.reason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reason_code: {
            value: cdktn.numberToHclTerraform(struct!.reasonCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkHeaderTagActionPropertyToTerraform(struct?: CcLink.HeaderTagActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLinkHeaderTagActionPropertyToHclTerraform(struct?: CcLink.HeaderTagActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccLinkNoBidActionPropertyToTerraform(struct?: CcLink.NoBidActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        no_bid_reason_code: cdktn.numberToTerraform(struct!.noBidReasonCode),
    }
}


export function ccLinkNoBidActionPropertyToHclTerraform(struct?: CcLink.NoBidActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        no_bid_reason_code: {
            value: cdktn.numberToHclTerraform(struct!.noBidReasonCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkActionPropertyToTerraform(struct?: CcLink.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_tag: ccLinkHeaderTagActionPropertyToTerraform(struct!.headerTag),
        no_bid: ccLinkNoBidActionPropertyToTerraform(struct!.noBid),
    }
}


export function ccLinkActionPropertyToHclTerraform(struct?: CcLink.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_tag: {
            value: ccLinkHeaderTagActionPropertyToHclTerraform(struct!.headerTag),
            isBlock: true,
            type: "struct",
            storageClassType: "HeaderTagActionProperty",
        },
        no_bid: {
            value: ccLinkNoBidActionPropertyToHclTerraform(struct!.noBid),
            isBlock: true,
            type: "struct",
            storageClassType: "NoBidActionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkFilterCriterionPropertyToTerraform(struct?: CcLink.FilterCriterionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        path: cdktn.stringToTerraform(struct!.path),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccLinkFilterCriterionPropertyToHclTerraform(struct?: CcLink.FilterCriterionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkFilterPropertyToTerraform(struct?: CcLink.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criteria: cdktn.listMapper(ccLinkFilterCriterionPropertyToTerraform, false)(struct!.criteria),
    }
}


export function ccLinkFilterPropertyToHclTerraform(struct?: CcLink.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criteria: {
            value: cdktn.listMapperHcl(ccLinkFilterCriterionPropertyToHclTerraform, false)(struct!.criteria),
            isBlock: true,
            type: "list",
            storageClassType: "FilterCriterionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkOpenRtbAttributeModuleParametersPropertyToTerraform(struct?: CcLink.OpenRtbAttributeModuleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: ccLinkActionPropertyToTerraform(struct!.action),
        filter_configuration: cdktn.listMapper(ccLinkFilterPropertyToTerraform, false)(struct!.filterConfiguration),
        filter_type: cdktn.stringToTerraform(struct!.filterType),
        holdback_percentage: cdktn.numberToTerraform(struct!.holdbackPercentage),
    }
}


export function ccLinkOpenRtbAttributeModuleParametersPropertyToHclTerraform(struct?: CcLink.OpenRtbAttributeModuleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: ccLinkActionPropertyToHclTerraform(struct!.action),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionProperty",
        },
        filter_configuration: {
            value: cdktn.listMapperHcl(ccLinkFilterPropertyToHclTerraform, false)(struct!.filterConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "FilterPropertyList",
        },
        filter_type: {
            value: cdktn.stringToHclTerraform(struct!.filterType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        holdback_percentage: {
            value: cdktn.numberToHclTerraform(struct!.holdbackPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkModuleParametersPropertyToTerraform(struct?: CcLink.ModuleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        no_bid: ccLinkNoBidModuleParametersPropertyToTerraform(struct!.noBid),
        open_rtb_attribute: ccLinkOpenRtbAttributeModuleParametersPropertyToTerraform(struct!.openRtbAttribute),
    }
}


export function ccLinkModuleParametersPropertyToHclTerraform(struct?: CcLink.ModuleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        no_bid: {
            value: ccLinkNoBidModuleParametersPropertyToHclTerraform(struct!.noBid),
            isBlock: true,
            type: "struct",
            storageClassType: "NoBidModuleParametersProperty",
        },
        open_rtb_attribute: {
            value: ccLinkOpenRtbAttributeModuleParametersPropertyToHclTerraform(struct!.openRtbAttribute),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenRtbAttributeModuleParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkModuleConfigurationPropertyToTerraform(struct?: CcLink.ModuleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        depends_on: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dependsOn),
        module_parameters: ccLinkModuleParametersPropertyToTerraform(struct!.moduleParameters),
        name: cdktn.stringToTerraform(struct!.name),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccLinkModuleConfigurationPropertyToHclTerraform(struct?: CcLink.ModuleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        depends_on: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dependsOn),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        module_parameters: {
            value: ccLinkModuleParametersPropertyToHclTerraform(struct!.moduleParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ModuleParametersProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkTagPropertyToTerraform(struct?: CcLink.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLinkTagPropertyToHclTerraform(struct?: CcLink.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLink {
export interface ResponderErrorMaskingForHttpCodeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#action CcLink#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#http_code CcLink#http_code}
    */
    readonly httpCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#logging_types CcLink#logging_types}
    */
    readonly loggingTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#response_logging_percentage CcLink#response_logging_percentage}
    */
    readonly responseLoggingPercentage?: number;
}
export class ResponderErrorMaskingForHttpCodePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResponderErrorMaskingForHttpCodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._httpCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpCode = this._httpCode;
        }
        if (this._loggingTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingTypes = this._loggingTypes;
        }
        if (this._responseLoggingPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseLoggingPercentage = this._responseLoggingPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResponderErrorMaskingForHttpCodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._httpCode = undefined;
            this._loggingTypes = undefined;
            this._responseLoggingPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._httpCode = value.httpCode;
            this._loggingTypes = value.loggingTypes;
            this._responseLoggingPercentage = value.responseLoggingPercentage;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // http_code - computed: true, optional: true, required: false
    private _httpCode?: string; 
    public get httpCode() {
        return this.getStringAttribute('http_code');
    }
    public set httpCode(value: string) {
        this._httpCode = value;
    }
    public resetHttpCode() {
        this._httpCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpCodeInput() {
        return this._httpCode;
    }

    // logging_types - computed: true, optional: true, required: false
    private _loggingTypes?: string[]; 
    public get loggingTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('logging_types'));
    }
    public set loggingTypes(value: string[]) {
        this._loggingTypes = value;
    }
    public resetLoggingTypes() {
        this._loggingTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingTypesInput() {
        return this._loggingTypes;
    }

    // response_logging_percentage - computed: true, optional: true, required: false
    private _responseLoggingPercentage?: number; 
    public get responseLoggingPercentage() {
        return this.getNumberAttribute('response_logging_percentage');
    }
    public set responseLoggingPercentage(value: number) {
        this._responseLoggingPercentage = value;
    }
    public resetResponseLoggingPercentage() {
        this._responseLoggingPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseLoggingPercentageInput() {
        return this._responseLoggingPercentage;
    }
}

export class ResponderErrorMaskingForHttpCodePropertyList extends cdktn.ComplexList {
    public internalValue? : ResponderErrorMaskingForHttpCodeProperty[] | cdktn.IResolvable

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
    public get(index: number): ResponderErrorMaskingForHttpCodePropertyOutputReference {
        return new ResponderErrorMaskingForHttpCodePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LinkAttributesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#customer_provided_id CcLink#customer_provided_id}
    */
    readonly customerProvidedId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#responder_error_masking CcLink#responder_error_masking}
    */
    readonly responderErrorMasking?: ResponderErrorMaskingForHttpCodeProperty[] | cdktn.IResolvable;
}
export class LinkAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinkAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerProvidedId !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerProvidedId = this._customerProvidedId;
        }
        if (this._responderErrorMasking?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.responderErrorMasking = this._responderErrorMasking?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinkAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerProvidedId = undefined;
            this._responderErrorMasking.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerProvidedId = value.customerProvidedId;
            this._responderErrorMasking.internalValue = value.responderErrorMasking;
        }
    }

    // customer_provided_id - computed: true, optional: true, required: false
    private _customerProvidedId?: string; 
    public get customerProvidedId() {
        return this.getStringAttribute('customer_provided_id');
    }
    public set customerProvidedId(value: string) {
        this._customerProvidedId = value;
    }
    public resetCustomerProvidedId() {
        this._customerProvidedId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerProvidedIdInput() {
        return this._customerProvidedId;
    }

    // responder_error_masking - computed: true, optional: true, required: false
    private _responderErrorMasking = new ResponderErrorMaskingForHttpCodePropertyList(this, "responder_error_masking", false);
    public get responderErrorMasking() {
        return this._responderErrorMasking;
    }
    public putResponderErrorMasking(value: ResponderErrorMaskingForHttpCodeProperty[] | cdktn.IResolvable) {
        this._responderErrorMasking.internalValue = value;
    }
    public resetResponderErrorMasking() {
        this._responderErrorMasking.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responderErrorMaskingInput() {
        return this._responderErrorMasking.internalValue;
    }
}
export interface LinkApplicationLogSamplingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#error_log CcLink#error_log}
    */
    readonly errorLog: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#filter_log CcLink#filter_log}
    */
    readonly filterLog: number;
}
export class LinkApplicationLogSamplingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinkApplicationLogSamplingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorLog !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorLog = this._errorLog;
        }
        if (this._filterLog !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterLog = this._filterLog;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinkApplicationLogSamplingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorLog = undefined;
            this._filterLog = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorLog = value.errorLog;
            this._filterLog = value.filterLog;
        }
    }

    // error_log - computed: false, optional: false, required: true
    private _errorLog?: number; 
    public get errorLog() {
        return this.getNumberAttribute('error_log');
    }
    public set errorLog(value: number) {
        this._errorLog = value;
    }
    // Temporarily expose input value. Use with caution.
    public get errorLogInput() {
        return this._errorLog;
    }

    // filter_log - computed: false, optional: false, required: true
    private _filterLog?: number; 
    public get filterLog() {
        return this.getNumberAttribute('filter_log');
    }
    public set filterLog(value: number) {
        this._filterLog = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterLogInput() {
        return this._filterLog;
    }
}
export interface ApplicationLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#link_application_log_sampling CcLink#link_application_log_sampling}
    */
    readonly linkApplicationLogSampling: LinkApplicationLogSamplingProperty;
}
export class ApplicationLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._linkApplicationLogSampling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkApplicationLogSampling = this._linkApplicationLogSampling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._linkApplicationLogSampling.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._linkApplicationLogSampling.internalValue = value.linkApplicationLogSampling;
        }
    }

    // link_application_log_sampling - computed: false, optional: false, required: true
    private _linkApplicationLogSampling = new LinkApplicationLogSamplingPropertyOutputReference(this, "link_application_log_sampling");
    public get linkApplicationLogSampling() {
        return this._linkApplicationLogSampling;
    }
    public putLinkApplicationLogSampling(value: LinkApplicationLogSamplingProperty) {
        this._linkApplicationLogSampling.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get linkApplicationLogSamplingInput() {
        return this._linkApplicationLogSampling.internalValue;
    }
}
export interface LinkLogSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#application_logs CcLink#application_logs}
    */
    readonly applicationLogs: ApplicationLogsProperty;
}
export class LinkLogSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinkLogSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationLogs = this._applicationLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinkLogSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationLogs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationLogs.internalValue = value.applicationLogs;
        }
    }

    // application_logs - computed: false, optional: false, required: true
    private _applicationLogs = new ApplicationLogsPropertyOutputReference(this, "application_logs");
    public get applicationLogs() {
        return this._applicationLogs;
    }
    public putApplicationLogs(value: ApplicationLogsProperty) {
        this._applicationLogs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationLogsInput() {
        return this._applicationLogs.internalValue;
    }
}
export interface NoBidModuleParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#pass_through_percentage CcLink#pass_through_percentage}
    */
    readonly passThroughPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#reason CcLink#reason}
    */
    readonly reason?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#reason_code CcLink#reason_code}
    */
    readonly reasonCode?: number;
}
export class NoBidModuleParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NoBidModuleParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._passThroughPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.passThroughPercentage = this._passThroughPercentage;
        }
        if (this._reason !== undefined) {
            hasAnyValues = true;
            internalValueResult.reason = this._reason;
        }
        if (this._reasonCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.reasonCode = this._reasonCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoBidModuleParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._passThroughPercentage = undefined;
            this._reason = undefined;
            this._reasonCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._passThroughPercentage = value.passThroughPercentage;
            this._reason = value.reason;
            this._reasonCode = value.reasonCode;
        }
    }

    // pass_through_percentage - computed: true, optional: true, required: false
    private _passThroughPercentage?: number; 
    public get passThroughPercentage() {
        return this.getNumberAttribute('pass_through_percentage');
    }
    public set passThroughPercentage(value: number) {
        this._passThroughPercentage = value;
    }
    public resetPassThroughPercentage() {
        this._passThroughPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passThroughPercentageInput() {
        return this._passThroughPercentage;
    }

    // reason - computed: true, optional: true, required: false
    private _reason?: string; 
    public get reason() {
        return this.getStringAttribute('reason');
    }
    public set reason(value: string) {
        this._reason = value;
    }
    public resetReason() {
        this._reason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reasonInput() {
        return this._reason;
    }

    // reason_code - computed: true, optional: true, required: false
    private _reasonCode?: number; 
    public get reasonCode() {
        return this.getNumberAttribute('reason_code');
    }
    public set reasonCode(value: number) {
        this._reasonCode = value;
    }
    public resetReasonCode() {
        this._reasonCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reasonCodeInput() {
        return this._reasonCode;
    }
}
export interface HeaderTagActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#name CcLink#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#value CcLink#value}
    */
    readonly value?: string;
}
export class HeaderTagActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HeaderTagActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeaderTagActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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
export interface NoBidActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#no_bid_reason_code CcLink#no_bid_reason_code}
    */
    readonly noBidReasonCode?: number;
}
export class NoBidActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NoBidActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._noBidReasonCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.noBidReasonCode = this._noBidReasonCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoBidActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._noBidReasonCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._noBidReasonCode = value.noBidReasonCode;
        }
    }

    // no_bid_reason_code - computed: true, optional: true, required: false
    private _noBidReasonCode?: number; 
    public get noBidReasonCode() {
        return this.getNumberAttribute('no_bid_reason_code');
    }
    public set noBidReasonCode(value: number) {
        this._noBidReasonCode = value;
    }
    public resetNoBidReasonCode() {
        this._noBidReasonCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noBidReasonCodeInput() {
        return this._noBidReasonCode;
    }
}
export interface ActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#header_tag CcLink#header_tag}
    */
    readonly headerTag?: HeaderTagActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#no_bid CcLink#no_bid}
    */
    readonly noBid?: NoBidActionProperty;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerTag = this._headerTag?.internalValue;
        }
        if (this._noBid?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noBid = this._noBid?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerTag.internalValue = undefined;
            this._noBid.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerTag.internalValue = value.headerTag;
            this._noBid.internalValue = value.noBid;
        }
    }

    // header_tag - computed: true, optional: true, required: false
    private _headerTag = new HeaderTagActionPropertyOutputReference(this, "header_tag");
    public get headerTag() {
        return this._headerTag;
    }
    public putHeaderTag(value: HeaderTagActionProperty) {
        this._headerTag.internalValue = value;
    }
    public resetHeaderTag() {
        this._headerTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerTagInput() {
        return this._headerTag.internalValue;
    }

    // no_bid - computed: true, optional: true, required: false
    private _noBid = new NoBidActionPropertyOutputReference(this, "no_bid");
    public get noBid() {
        return this._noBid;
    }
    public putNoBid(value: NoBidActionProperty) {
        this._noBid.internalValue = value;
    }
    public resetNoBid() {
        this._noBid.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noBidInput() {
        return this._noBid.internalValue;
    }
}
export interface FilterCriterionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#path CcLink#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#values CcLink#values}
    */
    readonly values?: string[];
}
export class FilterCriterionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterCriterionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterCriterionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
            this._values = value.values;
        }
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class FilterCriterionPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterCriterionProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterCriterionPropertyOutputReference {
        return new FilterCriterionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#criteria CcLink#criteria}
    */
    readonly criteria?: FilterCriterionProperty[] | cdktn.IResolvable;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._criteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.criteria = this._criteria?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._criteria.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._criteria.internalValue = value.criteria;
        }
    }

    // criteria - computed: true, optional: true, required: false
    private _criteria = new FilterCriterionPropertyList(this, "criteria", false);
    public get criteria() {
        return this._criteria;
    }
    public putCriteria(value: FilterCriterionProperty[] | cdktn.IResolvable) {
        this._criteria.internalValue = value;
    }
    public resetCriteria() {
        this._criteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criteriaInput() {
        return this._criteria.internalValue;
    }
}

export class FilterPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterPropertyOutputReference {
        return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OpenRtbAttributeModuleParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#action CcLink#action}
    */
    readonly action?: ActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#filter_configuration CcLink#filter_configuration}
    */
    readonly filterConfiguration?: FilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#filter_type CcLink#filter_type}
    */
    readonly filterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#holdback_percentage CcLink#holdback_percentage}
    */
    readonly holdbackPercentage?: number;
}
export class OpenRtbAttributeModuleParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenRtbAttributeModuleParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action?.internalValue;
        }
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        if (this._filterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterType = this._filterType;
        }
        if (this._holdbackPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.holdbackPercentage = this._holdbackPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenRtbAttributeModuleParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action.internalValue = undefined;
            this._filterConfiguration.internalValue = undefined;
            this._filterType = undefined;
            this._holdbackPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action.internalValue = value.action;
            this._filterConfiguration.internalValue = value.filterConfiguration;
            this._filterType = value.filterType;
            this._holdbackPercentage = value.holdbackPercentage;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action = new ActionPropertyOutputReference(this, "action");
    public get action() {
        return this._action;
    }
    public putAction(value: ActionProperty) {
        this._action.internalValue = value;
    }
    public resetAction() {
        this._action.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action.internalValue;
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new FilterPropertyList(this, "filter_configuration", false);
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: FilterProperty[] | cdktn.IResolvable) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }

    // filter_type - computed: true, optional: true, required: false
    private _filterType?: string; 
    public get filterType() {
        return this.getStringAttribute('filter_type');
    }
    public set filterType(value: string) {
        this._filterType = value;
    }
    public resetFilterType() {
        this._filterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterTypeInput() {
        return this._filterType;
    }

    // holdback_percentage - computed: true, optional: true, required: false
    private _holdbackPercentage?: number; 
    public get holdbackPercentage() {
        return this.getNumberAttribute('holdback_percentage');
    }
    public set holdbackPercentage(value: number) {
        this._holdbackPercentage = value;
    }
    public resetHoldbackPercentage() {
        this._holdbackPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get holdbackPercentageInput() {
        return this._holdbackPercentage;
    }
}
export interface ModuleParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#no_bid CcLink#no_bid}
    */
    readonly noBid?: NoBidModuleParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#open_rtb_attribute CcLink#open_rtb_attribute}
    */
    readonly openRtbAttribute?: OpenRtbAttributeModuleParametersProperty;
}
export class ModuleParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModuleParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._noBid?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noBid = this._noBid?.internalValue;
        }
        if (this._openRtbAttribute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openRtbAttribute = this._openRtbAttribute?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModuleParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._noBid.internalValue = undefined;
            this._openRtbAttribute.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._noBid.internalValue = value.noBid;
            this._openRtbAttribute.internalValue = value.openRtbAttribute;
        }
    }

    // no_bid - computed: true, optional: true, required: false
    private _noBid = new NoBidModuleParametersPropertyOutputReference(this, "no_bid");
    public get noBid() {
        return this._noBid;
    }
    public putNoBid(value: NoBidModuleParametersProperty) {
        this._noBid.internalValue = value;
    }
    public resetNoBid() {
        this._noBid.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noBidInput() {
        return this._noBid.internalValue;
    }

    // open_rtb_attribute - computed: true, optional: true, required: false
    private _openRtbAttribute = new OpenRtbAttributeModuleParametersPropertyOutputReference(this, "open_rtb_attribute");
    public get openRtbAttribute() {
        return this._openRtbAttribute;
    }
    public putOpenRtbAttribute(value: OpenRtbAttributeModuleParametersProperty) {
        this._openRtbAttribute.internalValue = value;
    }
    public resetOpenRtbAttribute() {
        this._openRtbAttribute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openRtbAttributeInput() {
        return this._openRtbAttribute.internalValue;
    }
}
export interface ModuleConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#depends_on CcLink#depends_on}
    */
    readonly dependsOn?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#module_parameters CcLink#module_parameters}
    */
    readonly moduleParameters?: ModuleParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#name CcLink#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#version CcLink#version}
    */
    readonly version?: string;
}
export class ModuleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ModuleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dependsOn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependsOn = this._dependsOn;
        }
        if (this._moduleParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.moduleParameters = this._moduleParameters?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModuleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dependsOn = undefined;
            this._moduleParameters.internalValue = undefined;
            this._name = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dependsOn = value.dependsOn;
            this._moduleParameters.internalValue = value.moduleParameters;
            this._name = value.name;
            this._version = value.version;
        }
    }

    // depends_on - computed: true, optional: true, required: false
    private _dependsOn?: string[]; 
    public get dependsOn() {
        return this.getListAttribute('depends_on');
    }
    public set dependsOn(value: string[]) {
        this._dependsOn = value;
    }
    public resetDependsOn() {
        this._dependsOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependsOnInput() {
        return this._dependsOn;
    }

    // module_parameters - computed: true, optional: true, required: false
    private _moduleParameters = new ModuleParametersPropertyOutputReference(this, "module_parameters");
    public get moduleParameters() {
        return this._moduleParameters;
    }
    public putModuleParameters(value: ModuleParametersProperty) {
        this._moduleParameters.internalValue = value;
    }
    public resetModuleParameters() {
        this._moduleParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get moduleParametersInput() {
        return this._moduleParameters.internalValue;
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

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}

export class ModuleConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ModuleConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ModuleConfigurationPropertyOutputReference {
        return new ModuleConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#key CcLink#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_link#value CcLink#value}
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
