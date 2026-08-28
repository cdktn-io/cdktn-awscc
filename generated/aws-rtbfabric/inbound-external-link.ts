// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInboundExternalLinkProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#gateway_id CcInboundExternalLink#gateway_id}
    */
    readonly gatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#link_attributes CcInboundExternalLink#link_attributes}
    */
    readonly linkAttributes?: CcInboundExternalLink.LinkAttributesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#link_log_settings CcInboundExternalLink#link_log_settings}
    */
    readonly linkLogSettings: CcInboundExternalLink.LinkLogSettingsProperty;
    /**
    * Tags to assign to the Link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#tags CcInboundExternalLink#tags}
    */
    readonly tags?: CcInboundExternalLink.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link awscc_rtbfabric_inbound_external_link}
*/
export class CcInboundExternalLink extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rtbfabric_inbound_external_link";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInboundExternalLink resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInboundExternalLink to import
    * @param importFromId The id of the existing CcInboundExternalLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInboundExternalLink to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_inbound_external_link", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link awscc_rtbfabric_inbound_external_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInboundExternalLinkProps
    */
    public constructor(scope: Construct, id: string, config: CcInboundExternalLinkProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rtbfabric_inbound_external_link',
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
        this._linkAttributes.internalValue = config.linkAttributes;
        this._linkLogSettings.internalValue = config.linkLogSettings;
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

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
        return this.getStringAttribute('domain_name');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // link_attributes - computed: true, optional: true, required: false
    private _linkAttributes = new CcInboundExternalLink.LinkAttributesPropertyOutputReference(this, "link_attributes");
    public get linkAttributes() {
        return this._linkAttributes;
    }
    public putLinkAttributes(value: CcInboundExternalLink.LinkAttributesProperty) {
        this._linkAttributes.internalValue = value;
    }
    public resetLinkAttributes() {
        this._linkAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkAttributesInput() {
        return this._linkAttributes.internalValue;
    }

    // link_id - computed: true, optional: false, required: false
    public get linkId() {
        return this.getStringAttribute('link_id');
    }

    // link_log_settings - computed: false, optional: false, required: true
    private _linkLogSettings = new CcInboundExternalLink.LinkLogSettingsPropertyOutputReference(this, "link_log_settings");
    public get linkLogSettings() {
        return this._linkLogSettings;
    }
    public putLinkLogSettings(value: CcInboundExternalLink.LinkLogSettingsProperty) {
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInboundExternalLink.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInboundExternalLink.TagProperty[] | cdktn.IResolvable) {
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
            link_attributes: ccInboundExternalLinkLinkAttributesPropertyToTerraform(this._linkAttributes.internalValue),
            link_log_settings: ccInboundExternalLinkLinkLogSettingsPropertyToTerraform(this._linkLogSettings.internalValue),
            tags: cdktn.listMapper(ccInboundExternalLinkTagPropertyToTerraform, false)(this._tags.internalValue),
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
            link_attributes: {
                value: ccInboundExternalLinkLinkAttributesPropertyToHclTerraform(this._linkAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInboundExternalLink.LinkAttributesProperty",
            },
            link_log_settings: {
                value: ccInboundExternalLinkLinkLogSettingsPropertyToHclTerraform(this._linkLogSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInboundExternalLink.LinkLogSettingsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInboundExternalLinkTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInboundExternalLink.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInboundExternalLinkResponderErrorMaskingForHttpCodePropertyToTerraform(struct?: CcInboundExternalLink.ResponderErrorMaskingForHttpCodeProperty | cdktn.IResolvable): any {
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


export function ccInboundExternalLinkResponderErrorMaskingForHttpCodePropertyToHclTerraform(struct?: CcInboundExternalLink.ResponderErrorMaskingForHttpCodeProperty | cdktn.IResolvable): any {
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


export function ccInboundExternalLinkLinkAttributesPropertyToTerraform(struct?: CcInboundExternalLink.LinkAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_provided_id: cdktn.stringToTerraform(struct!.customerProvidedId),
        responder_error_masking: cdktn.listMapper(ccInboundExternalLinkResponderErrorMaskingForHttpCodePropertyToTerraform, false)(struct!.responderErrorMasking),
    }
}


export function ccInboundExternalLinkLinkAttributesPropertyToHclTerraform(struct?: CcInboundExternalLink.LinkAttributesProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccInboundExternalLinkResponderErrorMaskingForHttpCodePropertyToHclTerraform, false)(struct!.responderErrorMasking),
            isBlock: true,
            type: "list",
            storageClassType: "ResponderErrorMaskingForHttpCodePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInboundExternalLinkLinkApplicationLogSamplingPropertyToTerraform(struct?: CcInboundExternalLink.LinkApplicationLogSamplingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_log: cdktn.numberToTerraform(struct!.errorLog),
        filter_log: cdktn.numberToTerraform(struct!.filterLog),
    }
}


export function ccInboundExternalLinkLinkApplicationLogSamplingPropertyToHclTerraform(struct?: CcInboundExternalLink.LinkApplicationLogSamplingProperty | cdktn.IResolvable): any {
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


export function ccInboundExternalLinkApplicationLogsPropertyToTerraform(struct?: CcInboundExternalLink.ApplicationLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        link_application_log_sampling: ccInboundExternalLinkLinkApplicationLogSamplingPropertyToTerraform(struct!.linkApplicationLogSampling),
    }
}


export function ccInboundExternalLinkApplicationLogsPropertyToHclTerraform(struct?: CcInboundExternalLink.ApplicationLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        link_application_log_sampling: {
            value: ccInboundExternalLinkLinkApplicationLogSamplingPropertyToHclTerraform(struct!.linkApplicationLogSampling),
            isBlock: true,
            type: "struct",
            storageClassType: "LinkApplicationLogSamplingProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInboundExternalLinkLinkLogSettingsPropertyToTerraform(struct?: CcInboundExternalLink.LinkLogSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_logs: ccInboundExternalLinkApplicationLogsPropertyToTerraform(struct!.applicationLogs),
    }
}


export function ccInboundExternalLinkLinkLogSettingsPropertyToHclTerraform(struct?: CcInboundExternalLink.LinkLogSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_logs: {
            value: ccInboundExternalLinkApplicationLogsPropertyToHclTerraform(struct!.applicationLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "ApplicationLogsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInboundExternalLinkTagPropertyToTerraform(struct?: CcInboundExternalLink.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInboundExternalLinkTagPropertyToHclTerraform(struct?: CcInboundExternalLink.TagProperty | cdktn.IResolvable): any {
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


export namespace CcInboundExternalLink {
export interface ResponderErrorMaskingForHttpCodeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#action CcInboundExternalLink#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#http_code CcInboundExternalLink#http_code}
    */
    readonly httpCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#logging_types CcInboundExternalLink#logging_types}
    */
    readonly loggingTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#response_logging_percentage CcInboundExternalLink#response_logging_percentage}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#customer_provided_id CcInboundExternalLink#customer_provided_id}
    */
    readonly customerProvidedId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#responder_error_masking CcInboundExternalLink#responder_error_masking}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#error_log CcInboundExternalLink#error_log}
    */
    readonly errorLog: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#filter_log CcInboundExternalLink#filter_log}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#link_application_log_sampling CcInboundExternalLink#link_application_log_sampling}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#application_logs CcInboundExternalLink#application_logs}
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
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#key CcInboundExternalLink#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rtbfabric_inbound_external_link#value CcInboundExternalLink#value}
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
