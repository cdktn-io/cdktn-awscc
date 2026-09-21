// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProcurementPortalPreferenceProps extends cdktn.TerraformMetaArguments {
    /**
    * The domain identifier for the buyer in the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain CcProcurementPortalPreference#buyer_domain}
    */
    readonly buyerDomain: string;
    /**
    * The unique identifier for the buyer in the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier CcProcurementPortalPreference#buyer_identifier}
    */
    readonly buyerIdentifier: string;
    /**
    * List of contact information for portal administrators and technical contacts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#contacts CcProcurementPortalPreference#contacts}
    */
    readonly contacts: CcProcurementPortalPreference.ContactsProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether e-invoice delivery is enabled for this procurement portal preference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_enabled CcProcurementPortalPreference#einvoice_delivery_enabled}
    */
    readonly einvoiceDeliveryEnabled: boolean | cdktn.IResolvable;
    /**
    * Specifies the preferences for e-invoice delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_preference CcProcurementPortalPreference#einvoice_delivery_preference}
    */
    readonly einvoiceDeliveryPreference?: CcProcurementPortalPreference.EinvoiceDeliveryPreferenceProperty;
    /**
    * The endpoint URL where e-invoices are delivered to the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint CcProcurementPortalPreference#procurement_portal_instance_endpoint}
    */
    readonly procurementPortalInstanceEndpoint?: string;
    /**
    * The name of the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_name CcProcurementPortalPreference#procurement_portal_name}
    */
    readonly procurementPortalName: string;
    /**
    * The shared secret or authentication credential used for secure communication with the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret CcProcurementPortalPreference#procurement_portal_shared_secret}
    */
    readonly procurementPortalSharedSecret?: string;
    /**
    * Indicates whether purchase order retrieval is enabled for this procurement portal preference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_retrieval_enabled CcProcurementPortalPreference#purchase_order_retrieval_enabled}
    */
    readonly purchaseOrderRetrievalEnabled: boolean | cdktn.IResolvable;
    /**
    * Specifies criteria for selecting which invoices should be processed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#selector CcProcurementPortalPreference#selector}
    */
    readonly selector?: CcProcurementPortalPreference.SelectorProperty;
    /**
    * The domain identifier for the supplier in the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain CcProcurementPortalPreference#supplier_domain}
    */
    readonly supplierDomain: string;
    /**
    * The unique identifier for the supplier in the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier CcProcurementPortalPreference#supplier_identifier}
    */
    readonly supplierIdentifier: string;
    /**
    * The tags associated with this procurement portal preference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#tags CcProcurementPortalPreference#tags}
    */
    readonly tags?: CcProcurementPortalPreference.TagsProperty[] | cdktn.IResolvable;
    /**
    * Configuration settings for the test environment of the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#test_env_preference CcProcurementPortalPreference#test_env_preference}
    */
    readonly testEnvPreference?: CcProcurementPortalPreference.TestEnvPreferenceProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}
*/
export class CcProcurementPortalPreference extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_invoicing_procurement_portal_preference";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProcurementPortalPreference resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProcurementPortalPreference to import
    * @param importFromId The id of the existing CcProcurementPortalPreference that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProcurementPortalPreference to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_invoicing_procurement_portal_preference", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProcurementPortalPreferenceProps
    */
    public constructor(scope: Construct, id: string, config: CcProcurementPortalPreferenceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_invoicing_procurement_portal_preference',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._buyerDomain = config.buyerDomain;
        this._buyerIdentifier = config.buyerIdentifier;
        this._contacts.internalValue = config.contacts;
        this._einvoiceDeliveryEnabled = config.einvoiceDeliveryEnabled;
        this._einvoiceDeliveryPreference.internalValue = config.einvoiceDeliveryPreference;
        this._procurementPortalInstanceEndpoint = config.procurementPortalInstanceEndpoint;
        this._procurementPortalName = config.procurementPortalName;
        this._procurementPortalSharedSecret = config.procurementPortalSharedSecret;
        this._purchaseOrderRetrievalEnabled = config.purchaseOrderRetrievalEnabled;
        this._selector.internalValue = config.selector;
        this._supplierDomain = config.supplierDomain;
        this._supplierIdentifier = config.supplierIdentifier;
        this._tags.internalValue = config.tags;
        this._testEnvPreference.internalValue = config.testEnvPreference;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }

    // buyer_domain - computed: false, optional: false, required: true
    private _buyerDomain?: string; 
    public get buyerDomain() {
        return this.getStringAttribute('buyer_domain');
    }
    public set buyerDomain(value: string) {
        this._buyerDomain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get buyerDomainInput() {
        return this._buyerDomain;
    }

    // buyer_identifier - computed: false, optional: false, required: true
    private _buyerIdentifier?: string; 
    public get buyerIdentifier() {
        return this.getStringAttribute('buyer_identifier');
    }
    public set buyerIdentifier(value: string) {
        this._buyerIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get buyerIdentifierInput() {
        return this._buyerIdentifier;
    }

    // contacts - computed: false, optional: false, required: true
    private _contacts = new CcProcurementPortalPreference.ContactsPropertyList(this, "contacts", false);
    public get contacts() {
        return this._contacts;
    }
    public putContacts(value: CcProcurementPortalPreference.ContactsProperty[] | cdktn.IResolvable) {
        this._contacts.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contactsInput() {
        return this._contacts.internalValue;
    }

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
        return this.getStringAttribute('create_date');
    }

    // einvoice_delivery_enabled - computed: false, optional: false, required: true
    private _einvoiceDeliveryEnabled?: boolean | cdktn.IResolvable; 
    public get einvoiceDeliveryEnabled() {
        return this.getBooleanAttribute('einvoice_delivery_enabled');
    }
    public set einvoiceDeliveryEnabled(value: boolean | cdktn.IResolvable) {
        this._einvoiceDeliveryEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get einvoiceDeliveryEnabledInput() {
        return this._einvoiceDeliveryEnabled;
    }

    // einvoice_delivery_preference - computed: true, optional: true, required: false
    private _einvoiceDeliveryPreference = new CcProcurementPortalPreference.EinvoiceDeliveryPreferencePropertyOutputReference(this, "einvoice_delivery_preference");
    public get einvoiceDeliveryPreference() {
        return this._einvoiceDeliveryPreference;
    }
    public putEinvoiceDeliveryPreference(value: CcProcurementPortalPreference.EinvoiceDeliveryPreferenceProperty) {
        this._einvoiceDeliveryPreference.internalValue = value;
    }
    public resetEinvoiceDeliveryPreference() {
        this._einvoiceDeliveryPreference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get einvoiceDeliveryPreferenceInput() {
        return this._einvoiceDeliveryPreference.internalValue;
    }

    // einvoice_delivery_preference_status - computed: true, optional: false, required: false
    public get einvoiceDeliveryPreferenceStatus() {
        return this.getStringAttribute('einvoice_delivery_preference_status');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_update_date - computed: true, optional: false, required: false
    public get lastUpdateDate() {
        return this.getStringAttribute('last_update_date');
    }

    // procurement_portal_instance_endpoint - computed: true, optional: true, required: false
    private _procurementPortalInstanceEndpoint?: string; 
    public get procurementPortalInstanceEndpoint() {
        return this.getStringAttribute('procurement_portal_instance_endpoint');
    }
    public set procurementPortalInstanceEndpoint(value: string) {
        this._procurementPortalInstanceEndpoint = value;
    }
    public resetProcurementPortalInstanceEndpoint() {
        this._procurementPortalInstanceEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get procurementPortalInstanceEndpointInput() {
        return this._procurementPortalInstanceEndpoint;
    }

    // procurement_portal_name - computed: false, optional: false, required: true
    private _procurementPortalName?: string; 
    public get procurementPortalName() {
        return this.getStringAttribute('procurement_portal_name');
    }
    public set procurementPortalName(value: string) {
        this._procurementPortalName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get procurementPortalNameInput() {
        return this._procurementPortalName;
    }

    // procurement_portal_preference_arn - computed: true, optional: false, required: false
    public get procurementPortalPreferenceArn() {
        return this.getStringAttribute('procurement_portal_preference_arn');
    }

    // procurement_portal_shared_secret - computed: true, optional: true, required: false
    private _procurementPortalSharedSecret?: string; 
    public get procurementPortalSharedSecret() {
        return this.getStringAttribute('procurement_portal_shared_secret');
    }
    public set procurementPortalSharedSecret(value: string) {
        this._procurementPortalSharedSecret = value;
    }
    public resetProcurementPortalSharedSecret() {
        this._procurementPortalSharedSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get procurementPortalSharedSecretInput() {
        return this._procurementPortalSharedSecret;
    }

    // purchase_order_retrieval_enabled - computed: false, optional: false, required: true
    private _purchaseOrderRetrievalEnabled?: boolean | cdktn.IResolvable; 
    public get purchaseOrderRetrievalEnabled() {
        return this.getBooleanAttribute('purchase_order_retrieval_enabled');
    }
    public set purchaseOrderRetrievalEnabled(value: boolean | cdktn.IResolvable) {
        this._purchaseOrderRetrievalEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get purchaseOrderRetrievalEnabledInput() {
        return this._purchaseOrderRetrievalEnabled;
    }

    // purchase_order_retrieval_endpoint - computed: true, optional: false, required: false
    public get purchaseOrderRetrievalEndpoint() {
        return this.getStringAttribute('purchase_order_retrieval_endpoint');
    }

    // purchase_order_retrieval_preference_status - computed: true, optional: false, required: false
    public get purchaseOrderRetrievalPreferenceStatus() {
        return this.getStringAttribute('purchase_order_retrieval_preference_status');
    }

    // selector - computed: true, optional: true, required: false
    private _selector = new CcProcurementPortalPreference.SelectorPropertyOutputReference(this, "selector");
    public get selector() {
        return this._selector;
    }
    public putSelector(value: CcProcurementPortalPreference.SelectorProperty) {
        this._selector.internalValue = value;
    }
    public resetSelector() {
        this._selector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectorInput() {
        return this._selector.internalValue;
    }

    // supplier_domain - computed: false, optional: false, required: true
    private _supplierDomain?: string; 
    public get supplierDomain() {
        return this.getStringAttribute('supplier_domain');
    }
    public set supplierDomain(value: string) {
        this._supplierDomain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get supplierDomainInput() {
        return this._supplierDomain;
    }

    // supplier_identifier - computed: false, optional: false, required: true
    private _supplierIdentifier?: string; 
    public get supplierIdentifier() {
        return this.getStringAttribute('supplier_identifier');
    }
    public set supplierIdentifier(value: string) {
        this._supplierIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get supplierIdentifierInput() {
        return this._supplierIdentifier;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProcurementPortalPreference.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProcurementPortalPreference.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // test_env_preference - computed: true, optional: true, required: false
    private _testEnvPreference = new CcProcurementPortalPreference.TestEnvPreferencePropertyOutputReference(this, "test_env_preference");
    public get testEnvPreference() {
        return this._testEnvPreference;
    }
    public putTestEnvPreference(value: CcProcurementPortalPreference.TestEnvPreferenceProperty) {
        this._testEnvPreference.internalValue = value;
    }
    public resetTestEnvPreference() {
        this._testEnvPreference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testEnvPreferenceInput() {
        return this._testEnvPreference.internalValue;
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getNumberAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            buyer_domain: cdktn.stringToTerraform(this._buyerDomain),
            buyer_identifier: cdktn.stringToTerraform(this._buyerIdentifier),
            contacts: cdktn.listMapper(ccProcurementPortalPreferenceContactsPropertyToTerraform, false)(this._contacts.internalValue),
            einvoice_delivery_enabled: cdktn.booleanToTerraform(this._einvoiceDeliveryEnabled),
            einvoice_delivery_preference: ccProcurementPortalPreferenceEinvoiceDeliveryPreferencePropertyToTerraform(this._einvoiceDeliveryPreference.internalValue),
            procurement_portal_instance_endpoint: cdktn.stringToTerraform(this._procurementPortalInstanceEndpoint),
            procurement_portal_name: cdktn.stringToTerraform(this._procurementPortalName),
            procurement_portal_shared_secret: cdktn.stringToTerraform(this._procurementPortalSharedSecret),
            purchase_order_retrieval_enabled: cdktn.booleanToTerraform(this._purchaseOrderRetrievalEnabled),
            selector: ccProcurementPortalPreferenceSelectorPropertyToTerraform(this._selector.internalValue),
            supplier_domain: cdktn.stringToTerraform(this._supplierDomain),
            supplier_identifier: cdktn.stringToTerraform(this._supplierIdentifier),
            tags: cdktn.listMapper(ccProcurementPortalPreferenceTagsPropertyToTerraform, false)(this._tags.internalValue),
            test_env_preference: ccProcurementPortalPreferenceTestEnvPreferencePropertyToTerraform(this._testEnvPreference.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            buyer_domain: {
                value: cdktn.stringToHclTerraform(this._buyerDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            buyer_identifier: {
                value: cdktn.stringToHclTerraform(this._buyerIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            contacts: {
                value: cdktn.listMapperHcl(ccProcurementPortalPreferenceContactsPropertyToHclTerraform, false)(this._contacts.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProcurementPortalPreference.ContactsPropertyList",
            },
            einvoice_delivery_enabled: {
                value: cdktn.booleanToHclTerraform(this._einvoiceDeliveryEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            einvoice_delivery_preference: {
                value: ccProcurementPortalPreferenceEinvoiceDeliveryPreferencePropertyToHclTerraform(this._einvoiceDeliveryPreference.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProcurementPortalPreference.EinvoiceDeliveryPreferenceProperty",
            },
            procurement_portal_instance_endpoint: {
                value: cdktn.stringToHclTerraform(this._procurementPortalInstanceEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            procurement_portal_name: {
                value: cdktn.stringToHclTerraform(this._procurementPortalName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            procurement_portal_shared_secret: {
                value: cdktn.stringToHclTerraform(this._procurementPortalSharedSecret),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            purchase_order_retrieval_enabled: {
                value: cdktn.booleanToHclTerraform(this._purchaseOrderRetrievalEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            selector: {
                value: ccProcurementPortalPreferenceSelectorPropertyToHclTerraform(this._selector.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProcurementPortalPreference.SelectorProperty",
            },
            supplier_domain: {
                value: cdktn.stringToHclTerraform(this._supplierDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            supplier_identifier: {
                value: cdktn.stringToHclTerraform(this._supplierIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProcurementPortalPreferenceTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProcurementPortalPreference.TagsPropertyList",
            },
            test_env_preference: {
                value: ccProcurementPortalPreferenceTestEnvPreferencePropertyToHclTerraform(this._testEnvPreference.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProcurementPortalPreference.TestEnvPreferenceProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProcurementPortalPreferenceContactsPropertyToTerraform(struct?: CcProcurementPortalPreference.ContactsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email: cdktn.stringToTerraform(struct!.email),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccProcurementPortalPreferenceContactsPropertyToHclTerraform(struct?: CcProcurementPortalPreference.ContactsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email: {
            value: cdktn.stringToHclTerraform(struct!.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProcurementPortalPreferencePurchaseOrderDataSourcesPropertyToTerraform(struct?: CcProcurementPortalPreference.PurchaseOrderDataSourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        einvoice_delivery_document_type: cdktn.stringToTerraform(struct!.einvoiceDeliveryDocumentType),
        purchase_order_data_source_type: cdktn.stringToTerraform(struct!.purchaseOrderDataSourceType),
    }
}


export function ccProcurementPortalPreferencePurchaseOrderDataSourcesPropertyToHclTerraform(struct?: CcProcurementPortalPreference.PurchaseOrderDataSourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        einvoice_delivery_document_type: {
            value: cdktn.stringToHclTerraform(struct!.einvoiceDeliveryDocumentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        purchase_order_data_source_type: {
            value: cdktn.stringToHclTerraform(struct!.purchaseOrderDataSourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProcurementPortalPreferenceEinvoiceDeliveryPreferencePropertyToTerraform(struct?: CcProcurementPortalPreference.EinvoiceDeliveryPreferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_testing_method: cdktn.stringToTerraform(struct!.connectionTestingMethod),
        einvoice_delivery_activation_date: cdktn.stringToTerraform(struct!.einvoiceDeliveryActivationDate),
        einvoice_delivery_attachment_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.einvoiceDeliveryAttachmentTypes),
        einvoice_delivery_document_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.einvoiceDeliveryDocumentTypes),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        purchase_order_data_sources: cdktn.listMapper(ccProcurementPortalPreferencePurchaseOrderDataSourcesPropertyToTerraform, false)(struct!.purchaseOrderDataSources),
    }
}


export function ccProcurementPortalPreferenceEinvoiceDeliveryPreferencePropertyToHclTerraform(struct?: CcProcurementPortalPreference.EinvoiceDeliveryPreferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_testing_method: {
            value: cdktn.stringToHclTerraform(struct!.connectionTestingMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        einvoice_delivery_activation_date: {
            value: cdktn.stringToHclTerraform(struct!.einvoiceDeliveryActivationDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        einvoice_delivery_attachment_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.einvoiceDeliveryAttachmentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        einvoice_delivery_document_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.einvoiceDeliveryDocumentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        purchase_order_data_sources: {
            value: cdktn.listMapperHcl(ccProcurementPortalPreferencePurchaseOrderDataSourcesPropertyToHclTerraform, false)(struct!.purchaseOrderDataSources),
            isBlock: true,
            type: "list",
            storageClassType: "PurchaseOrderDataSourcesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProcurementPortalPreferenceSelectorPropertyToTerraform(struct?: CcProcurementPortalPreference.SelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invoice_unit_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.invoiceUnitArns),
    }
}


export function ccProcurementPortalPreferenceSelectorPropertyToHclTerraform(struct?: CcProcurementPortalPreference.SelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invoice_unit_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.invoiceUnitArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProcurementPortalPreferenceTagsPropertyToTerraform(struct?: CcProcurementPortalPreference.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProcurementPortalPreferenceTagsPropertyToHclTerraform(struct?: CcProcurementPortalPreference.TagsProperty | cdktn.IResolvable): any {
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


export function ccProcurementPortalPreferenceTestEnvPreferencePropertyToTerraform(struct?: CcProcurementPortalPreference.TestEnvPreferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        buyer_domain: cdktn.stringToTerraform(struct!.buyerDomain),
        buyer_identifier: cdktn.stringToTerraform(struct!.buyerIdentifier),
        procurement_portal_instance_endpoint: cdktn.stringToTerraform(struct!.procurementPortalInstanceEndpoint),
        procurement_portal_shared_secret: cdktn.stringToTerraform(struct!.procurementPortalSharedSecret),
        supplier_domain: cdktn.stringToTerraform(struct!.supplierDomain),
        supplier_identifier: cdktn.stringToTerraform(struct!.supplierIdentifier),
    }
}


export function ccProcurementPortalPreferenceTestEnvPreferencePropertyToHclTerraform(struct?: CcProcurementPortalPreference.TestEnvPreferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        buyer_domain: {
            value: cdktn.stringToHclTerraform(struct!.buyerDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        buyer_identifier: {
            value: cdktn.stringToHclTerraform(struct!.buyerIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        procurement_portal_instance_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.procurementPortalInstanceEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        procurement_portal_shared_secret: {
            value: cdktn.stringToHclTerraform(struct!.procurementPortalSharedSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        supplier_domain: {
            value: cdktn.stringToHclTerraform(struct!.supplierDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        supplier_identifier: {
            value: cdktn.stringToHclTerraform(struct!.supplierIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcProcurementPortalPreference {
export interface ContactsProperty {
    /**
    * The email address of the contact person or role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#email CcProcurementPortalPreference#email}
    */
    readonly email?: string;
    /**
    * The name of the contact person or role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#name CcProcurementPortalPreference#name}
    */
    readonly name?: string;
}
export class ContactsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContactsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContactsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
            this._name = value.name;
        }
    }

    // email - computed: true, optional: true, required: false
    private _email?: string; 
    public get email() {
        return this.getStringAttribute('email');
    }
    public set email(value: string) {
        this._email = value;
    }
    public resetEmail() {
        this._email = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
        return this._email;
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
}

export class ContactsPropertyList extends cdktn.ComplexList {
    public internalValue? : ContactsProperty[] | cdktn.IResolvable

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
    public get(index: number): ContactsPropertyOutputReference {
        return new ContactsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PurchaseOrderDataSourcesProperty {
    /**
    * The type of e-invoice document that requires purchase order data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_type CcProcurementPortalPreference#einvoice_delivery_document_type}
    */
    readonly einvoiceDeliveryDocumentType?: string;
    /**
    * The type of source for purchase order data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_source_type CcProcurementPortalPreference#purchase_order_data_source_type}
    */
    readonly purchaseOrderDataSourceType?: string;
}
export class PurchaseOrderDataSourcesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PurchaseOrderDataSourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._einvoiceDeliveryDocumentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.einvoiceDeliveryDocumentType = this._einvoiceDeliveryDocumentType;
        }
        if (this._purchaseOrderDataSourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.purchaseOrderDataSourceType = this._purchaseOrderDataSourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PurchaseOrderDataSourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._einvoiceDeliveryDocumentType = undefined;
            this._purchaseOrderDataSourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._einvoiceDeliveryDocumentType = value.einvoiceDeliveryDocumentType;
            this._purchaseOrderDataSourceType = value.purchaseOrderDataSourceType;
        }
    }

    // einvoice_delivery_document_type - computed: true, optional: true, required: false
    private _einvoiceDeliveryDocumentType?: string; 
    public get einvoiceDeliveryDocumentType() {
        return this.getStringAttribute('einvoice_delivery_document_type');
    }
    public set einvoiceDeliveryDocumentType(value: string) {
        this._einvoiceDeliveryDocumentType = value;
    }
    public resetEinvoiceDeliveryDocumentType() {
        this._einvoiceDeliveryDocumentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get einvoiceDeliveryDocumentTypeInput() {
        return this._einvoiceDeliveryDocumentType;
    }

    // purchase_order_data_source_type - computed: true, optional: true, required: false
    private _purchaseOrderDataSourceType?: string; 
    public get purchaseOrderDataSourceType() {
        return this.getStringAttribute('purchase_order_data_source_type');
    }
    public set purchaseOrderDataSourceType(value: string) {
        this._purchaseOrderDataSourceType = value;
    }
    public resetPurchaseOrderDataSourceType() {
        this._purchaseOrderDataSourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get purchaseOrderDataSourceTypeInput() {
        return this._purchaseOrderDataSourceType;
    }
}

export class PurchaseOrderDataSourcesPropertyList extends cdktn.ComplexList {
    public internalValue? : PurchaseOrderDataSourcesProperty[] | cdktn.IResolvable

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
    public get(index: number): PurchaseOrderDataSourcesPropertyOutputReference {
        return new PurchaseOrderDataSourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EinvoiceDeliveryPreferenceProperty {
    /**
    * The method to use for testing the connection to the procurement portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#connection_testing_method CcProcurementPortalPreference#connection_testing_method}
    */
    readonly connectionTestingMethod?: string;
    /**
    * The ISO 8601 date-time when e-invoice delivery should be activated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_activation_date CcProcurementPortalPreference#einvoice_delivery_activation_date}
    */
    readonly einvoiceDeliveryActivationDate?: string;
    /**
    * The types of attachments to include with the e-invoice delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_attachment_types CcProcurementPortalPreference#einvoice_delivery_attachment_types}
    */
    readonly einvoiceDeliveryAttachmentTypes?: string[];
    /**
    * The types of e-invoice documents to be delivered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_types CcProcurementPortalPreference#einvoice_delivery_document_types}
    */
    readonly einvoiceDeliveryDocumentTypes?: string[];
    /**
    * The communication protocol to use for e-invoice delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#protocol CcProcurementPortalPreference#protocol}
    */
    readonly protocol?: string;
    /**
    * The sources of purchase order data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_sources CcProcurementPortalPreference#purchase_order_data_sources}
    */
    readonly purchaseOrderDataSources?: PurchaseOrderDataSourcesProperty[] | cdktn.IResolvable;
}
export class EinvoiceDeliveryPreferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EinvoiceDeliveryPreferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionTestingMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionTestingMethod = this._connectionTestingMethod;
        }
        if (this._einvoiceDeliveryActivationDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.einvoiceDeliveryActivationDate = this._einvoiceDeliveryActivationDate;
        }
        if (this._einvoiceDeliveryAttachmentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.einvoiceDeliveryAttachmentTypes = this._einvoiceDeliveryAttachmentTypes;
        }
        if (this._einvoiceDeliveryDocumentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.einvoiceDeliveryDocumentTypes = this._einvoiceDeliveryDocumentTypes;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._purchaseOrderDataSources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.purchaseOrderDataSources = this._purchaseOrderDataSources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EinvoiceDeliveryPreferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionTestingMethod = undefined;
            this._einvoiceDeliveryActivationDate = undefined;
            this._einvoiceDeliveryAttachmentTypes = undefined;
            this._einvoiceDeliveryDocumentTypes = undefined;
            this._protocol = undefined;
            this._purchaseOrderDataSources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionTestingMethod = value.connectionTestingMethod;
            this._einvoiceDeliveryActivationDate = value.einvoiceDeliveryActivationDate;
            this._einvoiceDeliveryAttachmentTypes = value.einvoiceDeliveryAttachmentTypes;
            this._einvoiceDeliveryDocumentTypes = value.einvoiceDeliveryDocumentTypes;
            this._protocol = value.protocol;
            this._purchaseOrderDataSources.internalValue = value.purchaseOrderDataSources;
        }
    }

    // connection_testing_method - computed: true, optional: true, required: false
    private _connectionTestingMethod?: string; 
    public get connectionTestingMethod() {
        return this.getStringAttribute('connection_testing_method');
    }
    public set connectionTestingMethod(value: string) {
        this._connectionTestingMethod = value;
    }
    public resetConnectionTestingMethod() {
        this._connectionTestingMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTestingMethodInput() {
        return this._connectionTestingMethod;
    }

    // einvoice_delivery_activation_date - computed: true, optional: true, required: false
    private _einvoiceDeliveryActivationDate?: string; 
    public get einvoiceDeliveryActivationDate() {
        return this.getStringAttribute('einvoice_delivery_activation_date');
    }
    public set einvoiceDeliveryActivationDate(value: string) {
        this._einvoiceDeliveryActivationDate = value;
    }
    public resetEinvoiceDeliveryActivationDate() {
        this._einvoiceDeliveryActivationDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get einvoiceDeliveryActivationDateInput() {
        return this._einvoiceDeliveryActivationDate;
    }

    // einvoice_delivery_attachment_types - computed: true, optional: true, required: false
    private _einvoiceDeliveryAttachmentTypes?: string[]; 
    public get einvoiceDeliveryAttachmentTypes() {
        return this.getListAttribute('einvoice_delivery_attachment_types');
    }
    public set einvoiceDeliveryAttachmentTypes(value: string[]) {
        this._einvoiceDeliveryAttachmentTypes = value;
    }
    public resetEinvoiceDeliveryAttachmentTypes() {
        this._einvoiceDeliveryAttachmentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get einvoiceDeliveryAttachmentTypesInput() {
        return this._einvoiceDeliveryAttachmentTypes;
    }

    // einvoice_delivery_document_types - computed: true, optional: true, required: false
    private _einvoiceDeliveryDocumentTypes?: string[]; 
    public get einvoiceDeliveryDocumentTypes() {
        return this.getListAttribute('einvoice_delivery_document_types');
    }
    public set einvoiceDeliveryDocumentTypes(value: string[]) {
        this._einvoiceDeliveryDocumentTypes = value;
    }
    public resetEinvoiceDeliveryDocumentTypes() {
        this._einvoiceDeliveryDocumentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get einvoiceDeliveryDocumentTypesInput() {
        return this._einvoiceDeliveryDocumentTypes;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // purchase_order_data_sources - computed: true, optional: true, required: false
    private _purchaseOrderDataSources = new PurchaseOrderDataSourcesPropertyList(this, "purchase_order_data_sources", false);
    public get purchaseOrderDataSources() {
        return this._purchaseOrderDataSources;
    }
    public putPurchaseOrderDataSources(value: PurchaseOrderDataSourcesProperty[] | cdktn.IResolvable) {
        this._purchaseOrderDataSources.internalValue = value;
    }
    public resetPurchaseOrderDataSources() {
        this._purchaseOrderDataSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get purchaseOrderDataSourcesInput() {
        return this._purchaseOrderDataSources.internalValue;
    }
}
export interface SelectorProperty {
    /**
    * The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#invoice_unit_arns CcProcurementPortalPreference#invoice_unit_arns}
    */
    readonly invoiceUnitArns?: string[];
}
export class SelectorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invoiceUnitArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.invoiceUnitArns = this._invoiceUnitArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invoiceUnitArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invoiceUnitArns = value.invoiceUnitArns;
        }
    }

    // invoice_unit_arns - computed: true, optional: true, required: false
    private _invoiceUnitArns?: string[]; 
    public get invoiceUnitArns() {
        return this.getListAttribute('invoice_unit_arns');
    }
    public set invoiceUnitArns(value: string[]) {
        this._invoiceUnitArns = value;
    }
    public resetInvoiceUnitArns() {
        this._invoiceUnitArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invoiceUnitArnsInput() {
        return this._invoiceUnitArns;
    }
}
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#key CcProcurementPortalPreference#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#value CcProcurementPortalPreference#value}
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
export interface TestEnvPreferenceProperty {
    /**
    * The domain identifier for the buyer in the test environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain CcProcurementPortalPreference#buyer_domain}
    */
    readonly buyerDomain?: string;
    /**
    * The unique identifier for the buyer in the test environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier CcProcurementPortalPreference#buyer_identifier}
    */
    readonly buyerIdentifier?: string;
    /**
    * The endpoint URL for e-invoice delivery in the test environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint CcProcurementPortalPreference#procurement_portal_instance_endpoint}
    */
    readonly procurementPortalInstanceEndpoint?: string;
    /**
    * The shared secret for secure communication in the test environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret CcProcurementPortalPreference#procurement_portal_shared_secret}
    */
    readonly procurementPortalSharedSecret?: string;
    /**
    * The domain identifier for the supplier in the test environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain CcProcurementPortalPreference#supplier_domain}
    */
    readonly supplierDomain?: string;
    /**
    * The unique identifier for the supplier in the test environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier CcProcurementPortalPreference#supplier_identifier}
    */
    readonly supplierIdentifier?: string;
}
export class TestEnvPreferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TestEnvPreferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buyerDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.buyerDomain = this._buyerDomain;
        }
        if (this._buyerIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.buyerIdentifier = this._buyerIdentifier;
        }
        if (this._procurementPortalInstanceEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.procurementPortalInstanceEndpoint = this._procurementPortalInstanceEndpoint;
        }
        if (this._procurementPortalSharedSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.procurementPortalSharedSecret = this._procurementPortalSharedSecret;
        }
        if (this._supplierDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.supplierDomain = this._supplierDomain;
        }
        if (this._supplierIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.supplierIdentifier = this._supplierIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TestEnvPreferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buyerDomain = undefined;
            this._buyerIdentifier = undefined;
            this._procurementPortalInstanceEndpoint = undefined;
            this._procurementPortalSharedSecret = undefined;
            this._supplierDomain = undefined;
            this._supplierIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buyerDomain = value.buyerDomain;
            this._buyerIdentifier = value.buyerIdentifier;
            this._procurementPortalInstanceEndpoint = value.procurementPortalInstanceEndpoint;
            this._procurementPortalSharedSecret = value.procurementPortalSharedSecret;
            this._supplierDomain = value.supplierDomain;
            this._supplierIdentifier = value.supplierIdentifier;
        }
    }

    // buyer_domain - computed: true, optional: true, required: false
    private _buyerDomain?: string; 
    public get buyerDomain() {
        return this.getStringAttribute('buyer_domain');
    }
    public set buyerDomain(value: string) {
        this._buyerDomain = value;
    }
    public resetBuyerDomain() {
        this._buyerDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buyerDomainInput() {
        return this._buyerDomain;
    }

    // buyer_identifier - computed: true, optional: true, required: false
    private _buyerIdentifier?: string; 
    public get buyerIdentifier() {
        return this.getStringAttribute('buyer_identifier');
    }
    public set buyerIdentifier(value: string) {
        this._buyerIdentifier = value;
    }
    public resetBuyerIdentifier() {
        this._buyerIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buyerIdentifierInput() {
        return this._buyerIdentifier;
    }

    // procurement_portal_instance_endpoint - computed: true, optional: true, required: false
    private _procurementPortalInstanceEndpoint?: string; 
    public get procurementPortalInstanceEndpoint() {
        return this.getStringAttribute('procurement_portal_instance_endpoint');
    }
    public set procurementPortalInstanceEndpoint(value: string) {
        this._procurementPortalInstanceEndpoint = value;
    }
    public resetProcurementPortalInstanceEndpoint() {
        this._procurementPortalInstanceEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get procurementPortalInstanceEndpointInput() {
        return this._procurementPortalInstanceEndpoint;
    }

    // procurement_portal_shared_secret - computed: true, optional: true, required: false
    private _procurementPortalSharedSecret?: string; 
    public get procurementPortalSharedSecret() {
        return this.getStringAttribute('procurement_portal_shared_secret');
    }
    public set procurementPortalSharedSecret(value: string) {
        this._procurementPortalSharedSecret = value;
    }
    public resetProcurementPortalSharedSecret() {
        this._procurementPortalSharedSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get procurementPortalSharedSecretInput() {
        return this._procurementPortalSharedSecret;
    }

    // supplier_domain - computed: true, optional: true, required: false
    private _supplierDomain?: string; 
    public get supplierDomain() {
        return this.getStringAttribute('supplier_domain');
    }
    public set supplierDomain(value: string) {
        this._supplierDomain = value;
    }
    public resetSupplierDomain() {
        this._supplierDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supplierDomainInput() {
        return this._supplierDomain;
    }

    // supplier_identifier - computed: true, optional: true, required: false
    private _supplierIdentifier?: string; 
    public get supplierIdentifier() {
        return this.getStringAttribute('supplier_identifier');
    }
    public set supplierIdentifier(value: string) {
        this._supplierIdentifier = value;
    }
    public resetSupplierIdentifier() {
        this._supplierIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supplierIdentifierInput() {
        return this._supplierIdentifier;
    }
}
}
