// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventDataStoreProps extends cdktn.TerraformMetaArguments {
    /**
    * The advanced event selectors that were used to select events for the data store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#advanced_event_selectors CcEventDataStore#advanced_event_selectors}
    */
    readonly advancedEventSelectors?: CcEventDataStore.AdvancedEventSelectorProperty[] | cdktn.IResolvable;
    /**
    * The mode that the event data store will use to charge for event storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#billing_mode CcEventDataStore#billing_mode}
    */
    readonly billingMode?: string;
    /**
    * An array that enriches event records in an existing event data store by including additional information specified in individual ContexKeySelector entries. If you add ContextKeySelectors, you must set MaxEventSize to Large.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#context_key_selectors CcEventDataStore#context_key_selectors}
    */
    readonly contextKeySelectors?: CcEventDataStore.ContextKeySelectorProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether federation is enabled on an event data store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#federation_enabled CcEventDataStore#federation_enabled}
    */
    readonly federationEnabled?: boolean | cdktn.IResolvable;
    /**
    * The ARN of the role used for event data store federation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#federation_role_arn CcEventDataStore#federation_role_arn}
    */
    readonly federationRoleArn?: string;
    /**
    * Indicates whether the event data store is ingesting events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#ingestion_enabled CcEventDataStore#ingestion_enabled}
    */
    readonly ingestionEnabled?: boolean | cdktn.IResolvable;
    /**
    * Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing event data store. Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#insight_selectors CcEventDataStore#insight_selectors}
    */
    readonly insightSelectors?: CcEventDataStore.InsightSelectorProperty[] | cdktn.IResolvable;
    /**
    * Specifies the ARN of the event data store that will collect Insights events. Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#insights_destination CcEventDataStore#insights_destination}
    */
    readonly insightsDestination?: string;
    /**
    * Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#kms_key_id CcEventDataStore#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Specifies the maximum size allowed for the event. Valid values are Standard and Large. If you add ContextKeySelectors, this value must be set to Large.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#max_event_size CcEventDataStore#max_event_size}
    */
    readonly maxEventSize?: string;
    /**
    * Indicates whether the event data store includes events from all regions, or only from the region in which it was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#multi_region_enabled CcEventDataStore#multi_region_enabled}
    */
    readonly multiRegionEnabled?: boolean | cdktn.IResolvable;
    /**
    * The name of the event data store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#name CcEventDataStore#name}
    */
    readonly name?: string;
    /**
    * Indicates that an event data store is collecting logged events for an organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#organization_enabled CcEventDataStore#organization_enabled}
    */
    readonly organizationEnabled?: boolean | cdktn.IResolvable;
    /**
    * The retention period, in days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#retention_period CcEventDataStore#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#tags CcEventDataStore#tags}
    */
    readonly tags?: CcEventDataStore.TagProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether the event data store is protected from termination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#termination_protection_enabled CcEventDataStore#termination_protection_enabled}
    */
    readonly terminationProtectionEnabled?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store awscc_cloudtrail_event_data_store}
*/
export class CcEventDataStore extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudtrail_event_data_store";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventDataStore resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventDataStore to import
    * @param importFromId The id of the existing CcEventDataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventDataStore to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudtrail_event_data_store", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store awscc_cloudtrail_event_data_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventDataStoreProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcEventDataStoreProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudtrail_event_data_store',
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
        this._advancedEventSelectors.internalValue = config.advancedEventSelectors;
        this._billingMode = config.billingMode;
        this._contextKeySelectors.internalValue = config.contextKeySelectors;
        this._federationEnabled = config.federationEnabled;
        this._federationRoleArn = config.federationRoleArn;
        this._ingestionEnabled = config.ingestionEnabled;
        this._insightSelectors.internalValue = config.insightSelectors;
        this._insightsDestination = config.insightsDestination;
        this._kmsKeyId = config.kmsKeyId;
        this._maxEventSize = config.maxEventSize;
        this._multiRegionEnabled = config.multiRegionEnabled;
        this._name = config.name;
        this._organizationEnabled = config.organizationEnabled;
        this._retentionPeriod = config.retentionPeriod;
        this._tags.internalValue = config.tags;
        this._terminationProtectionEnabled = config.terminationProtectionEnabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // advanced_event_selectors - computed: true, optional: true, required: false
    private _advancedEventSelectors = new CcEventDataStore.AdvancedEventSelectorPropertyList(this, "advanced_event_selectors", true);
    public get advancedEventSelectors() {
        return this._advancedEventSelectors;
    }
    public putAdvancedEventSelectors(value: CcEventDataStore.AdvancedEventSelectorProperty[] | cdktn.IResolvable) {
        this._advancedEventSelectors.internalValue = value;
    }
    public resetAdvancedEventSelectors() {
        this._advancedEventSelectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedEventSelectorsInput() {
        return this._advancedEventSelectors.internalValue;
    }

    // billing_mode - computed: true, optional: true, required: false
    private _billingMode?: string; 
    public get billingMode() {
        return this.getStringAttribute('billing_mode');
    }
    public set billingMode(value: string) {
        this._billingMode = value;
    }
    public resetBillingMode() {
        this._billingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingModeInput() {
        return this._billingMode;
    }

    // context_key_selectors - computed: true, optional: true, required: false
    private _contextKeySelectors = new CcEventDataStore.ContextKeySelectorPropertyList(this, "context_key_selectors", true);
    public get contextKeySelectors() {
        return this._contextKeySelectors;
    }
    public putContextKeySelectors(value: CcEventDataStore.ContextKeySelectorProperty[] | cdktn.IResolvable) {
        this._contextKeySelectors.internalValue = value;
    }
    public resetContextKeySelectors() {
        this._contextKeySelectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextKeySelectorsInput() {
        return this._contextKeySelectors.internalValue;
    }

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // event_data_store_arn - computed: true, optional: false, required: false
    public get eventDataStoreArn() {
        return this.getStringAttribute('event_data_store_arn');
    }

    // federation_enabled - computed: true, optional: true, required: false
    private _federationEnabled?: boolean | cdktn.IResolvable; 
    public get federationEnabled() {
        return this.getBooleanAttribute('federation_enabled');
    }
    public set federationEnabled(value: boolean | cdktn.IResolvable) {
        this._federationEnabled = value;
    }
    public resetFederationEnabled() {
        this._federationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get federationEnabledInput() {
        return this._federationEnabled;
    }

    // federation_role_arn - computed: true, optional: true, required: false
    private _federationRoleArn?: string; 
    public get federationRoleArn() {
        return this.getStringAttribute('federation_role_arn');
    }
    public set federationRoleArn(value: string) {
        this._federationRoleArn = value;
    }
    public resetFederationRoleArn() {
        this._federationRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get federationRoleArnInput() {
        return this._federationRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingestion_enabled - computed: true, optional: true, required: false
    private _ingestionEnabled?: boolean | cdktn.IResolvable; 
    public get ingestionEnabled() {
        return this.getBooleanAttribute('ingestion_enabled');
    }
    public set ingestionEnabled(value: boolean | cdktn.IResolvable) {
        this._ingestionEnabled = value;
    }
    public resetIngestionEnabled() {
        this._ingestionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestionEnabledInput() {
        return this._ingestionEnabled;
    }

    // insight_selectors - computed: true, optional: true, required: false
    private _insightSelectors = new CcEventDataStore.InsightSelectorPropertyList(this, "insight_selectors", true);
    public get insightSelectors() {
        return this._insightSelectors;
    }
    public putInsightSelectors(value: CcEventDataStore.InsightSelectorProperty[] | cdktn.IResolvable) {
        this._insightSelectors.internalValue = value;
    }
    public resetInsightSelectors() {
        this._insightSelectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insightSelectorsInput() {
        return this._insightSelectors.internalValue;
    }

    // insights_destination - computed: true, optional: true, required: false
    private _insightsDestination?: string; 
    public get insightsDestination() {
        return this.getStringAttribute('insights_destination');
    }
    public set insightsDestination(value: string) {
        this._insightsDestination = value;
    }
    public resetInsightsDestination() {
        this._insightsDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insightsDestinationInput() {
        return this._insightsDestination;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // max_event_size - computed: true, optional: true, required: false
    private _maxEventSize?: string; 
    public get maxEventSize() {
        return this.getStringAttribute('max_event_size');
    }
    public set maxEventSize(value: string) {
        this._maxEventSize = value;
    }
    public resetMaxEventSize() {
        this._maxEventSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxEventSizeInput() {
        return this._maxEventSize;
    }

    // multi_region_enabled - computed: true, optional: true, required: false
    private _multiRegionEnabled?: boolean | cdktn.IResolvable; 
    public get multiRegionEnabled() {
        return this.getBooleanAttribute('multi_region_enabled');
    }
    public set multiRegionEnabled(value: boolean | cdktn.IResolvable) {
        this._multiRegionEnabled = value;
    }
    public resetMultiRegionEnabled() {
        this._multiRegionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiRegionEnabledInput() {
        return this._multiRegionEnabled;
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

    // organization_enabled - computed: true, optional: true, required: false
    private _organizationEnabled?: boolean | cdktn.IResolvable; 
    public get organizationEnabled() {
        return this.getBooleanAttribute('organization_enabled');
    }
    public set organizationEnabled(value: boolean | cdktn.IResolvable) {
        this._organizationEnabled = value;
    }
    public resetOrganizationEnabled() {
        this._organizationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationEnabledInput() {
        return this._organizationEnabled;
    }

    // retention_period - computed: true, optional: true, required: false
    private _retentionPeriod?: number; 
    public get retentionPeriod() {
        return this.getNumberAttribute('retention_period');
    }
    public set retentionPeriod(value: number) {
        this._retentionPeriod = value;
    }
    public resetRetentionPeriod() {
        this._retentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInput() {
        return this._retentionPeriod;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEventDataStore.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEventDataStore.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // termination_protection_enabled - computed: true, optional: true, required: false
    private _terminationProtectionEnabled?: boolean | cdktn.IResolvable; 
    public get terminationProtectionEnabled() {
        return this.getBooleanAttribute('termination_protection_enabled');
    }
    public set terminationProtectionEnabled(value: boolean | cdktn.IResolvable) {
        this._terminationProtectionEnabled = value;
    }
    public resetTerminationProtectionEnabled() {
        this._terminationProtectionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationProtectionEnabledInput() {
        return this._terminationProtectionEnabled;
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
            advanced_event_selectors: cdktn.listMapper(ccEventDataStoreAdvancedEventSelectorPropertyToTerraform, false)(this._advancedEventSelectors.internalValue),
            billing_mode: cdktn.stringToTerraform(this._billingMode),
            context_key_selectors: cdktn.listMapper(ccEventDataStoreContextKeySelectorPropertyToTerraform, false)(this._contextKeySelectors.internalValue),
            federation_enabled: cdktn.booleanToTerraform(this._federationEnabled),
            federation_role_arn: cdktn.stringToTerraform(this._federationRoleArn),
            ingestion_enabled: cdktn.booleanToTerraform(this._ingestionEnabled),
            insight_selectors: cdktn.listMapper(ccEventDataStoreInsightSelectorPropertyToTerraform, false)(this._insightSelectors.internalValue),
            insights_destination: cdktn.stringToTerraform(this._insightsDestination),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            max_event_size: cdktn.stringToTerraform(this._maxEventSize),
            multi_region_enabled: cdktn.booleanToTerraform(this._multiRegionEnabled),
            name: cdktn.stringToTerraform(this._name),
            organization_enabled: cdktn.booleanToTerraform(this._organizationEnabled),
            retention_period: cdktn.numberToTerraform(this._retentionPeriod),
            tags: cdktn.listMapper(ccEventDataStoreTagPropertyToTerraform, false)(this._tags.internalValue),
            termination_protection_enabled: cdktn.booleanToTerraform(this._terminationProtectionEnabled),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            advanced_event_selectors: {
                value: cdktn.listMapperHcl(ccEventDataStoreAdvancedEventSelectorPropertyToHclTerraform, false)(this._advancedEventSelectors.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEventDataStore.AdvancedEventSelectorPropertyList",
            },
            billing_mode: {
                value: cdktn.stringToHclTerraform(this._billingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            context_key_selectors: {
                value: cdktn.listMapperHcl(ccEventDataStoreContextKeySelectorPropertyToHclTerraform, false)(this._contextKeySelectors.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEventDataStore.ContextKeySelectorPropertyList",
            },
            federation_enabled: {
                value: cdktn.booleanToHclTerraform(this._federationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            federation_role_arn: {
                value: cdktn.stringToHclTerraform(this._federationRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ingestion_enabled: {
                value: cdktn.booleanToHclTerraform(this._ingestionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            insight_selectors: {
                value: cdktn.listMapperHcl(ccEventDataStoreInsightSelectorPropertyToHclTerraform, false)(this._insightSelectors.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEventDataStore.InsightSelectorPropertyList",
            },
            insights_destination: {
                value: cdktn.stringToHclTerraform(this._insightsDestination),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_event_size: {
                value: cdktn.stringToHclTerraform(this._maxEventSize),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multi_region_enabled: {
                value: cdktn.booleanToHclTerraform(this._multiRegionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization_enabled: {
                value: cdktn.booleanToHclTerraform(this._organizationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            retention_period: {
                value: cdktn.numberToHclTerraform(this._retentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEventDataStoreTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventDataStore.TagPropertyList",
            },
            termination_protection_enabled: {
                value: cdktn.booleanToHclTerraform(this._terminationProtectionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventDataStoreAdvancedFieldSelectorPropertyToTerraform(struct?: CcEventDataStore.AdvancedFieldSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endsWith),
        equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.equalTo),
        field: cdktn.stringToTerraform(struct!.field),
        not_ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEndsWith),
        not_equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEquals),
        not_starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notStartsWith),
        starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.startsWith),
    }
}


export function ccEventDataStoreAdvancedFieldSelectorPropertyToHclTerraform(struct?: CcEventDataStore.AdvancedFieldSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ends_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endsWith),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        equals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.equalTo),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        field: {
            value: cdktn.stringToHclTerraform(struct!.field),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        not_ends_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEndsWith),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        not_equals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEquals),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        not_starts_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notStartsWith),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        starts_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.startsWith),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventDataStoreAdvancedEventSelectorPropertyToTerraform(struct?: CcEventDataStore.AdvancedEventSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_selectors: cdktn.listMapper(ccEventDataStoreAdvancedFieldSelectorPropertyToTerraform, false)(struct!.fieldSelectors),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccEventDataStoreAdvancedEventSelectorPropertyToHclTerraform(struct?: CcEventDataStore.AdvancedEventSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_selectors: {
            value: cdktn.listMapperHcl(ccEventDataStoreAdvancedFieldSelectorPropertyToHclTerraform, false)(struct!.fieldSelectors),
            isBlock: true,
            type: "set",
            storageClassType: "AdvancedFieldSelectorPropertyList",
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


export function ccEventDataStoreContextKeySelectorPropertyToTerraform(struct?: CcEventDataStore.ContextKeySelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.equalTo),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccEventDataStoreContextKeySelectorPropertyToHclTerraform(struct?: CcEventDataStore.ContextKeySelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        equals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.equalTo),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventDataStoreInsightSelectorPropertyToTerraform(struct?: CcEventDataStore.InsightSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        insight_type: cdktn.stringToTerraform(struct!.insightType),
    }
}


export function ccEventDataStoreInsightSelectorPropertyToHclTerraform(struct?: CcEventDataStore.InsightSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        insight_type: {
            value: cdktn.stringToHclTerraform(struct!.insightType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventDataStoreTagPropertyToTerraform(struct?: CcEventDataStore.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventDataStoreTagPropertyToHclTerraform(struct?: CcEventDataStore.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEventDataStore {
export interface AdvancedFieldSelectorProperty {
    /**
    * An operator that includes events that match the last few characters of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#ends_with CcEventDataStore#ends_with}
    */
    readonly endsWith?: string[];
    /**
    * An operator that includes events that match the exact value of the event record field specified as the value of Field. This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#equals CcEventDataStore#equals}
    */
    readonly equalTo?: string[];
    /**
    * A field in an event record on which to filter events to be logged. Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#field CcEventDataStore#field}
    */
    readonly field?: string;
    /**
    * An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#not_ends_with CcEventDataStore#not_ends_with}
    */
    readonly notEndsWith?: string[];
    /**
    * An operator that excludes events that match the exact value of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#not_equals CcEventDataStore#not_equals}
    */
    readonly notEquals?: string[];
    /**
    * An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#not_starts_with CcEventDataStore#not_starts_with}
    */
    readonly notStartsWith?: string[];
    /**
    * An operator that includes events that match the first few characters of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#starts_with CcEventDataStore#starts_with}
    */
    readonly startsWith?: string[];
}
export class AdvancedFieldSelectorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdvancedFieldSelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.endsWith = this._endsWith;
        }
        if (this._equals !== undefined) {
            hasAnyValues = true;
            internalValueResult.equalTo = this._equals;
        }
        if (this._field !== undefined) {
            hasAnyValues = true;
            internalValueResult.field = this._field;
        }
        if (this._notEndsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.notEndsWith = this._notEndsWith;
        }
        if (this._notEquals !== undefined) {
            hasAnyValues = true;
            internalValueResult.notEquals = this._notEquals;
        }
        if (this._notStartsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.notStartsWith = this._notStartsWith;
        }
        if (this._startsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.startsWith = this._startsWith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedFieldSelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endsWith = undefined;
            this._equals = undefined;
            this._field = undefined;
            this._notEndsWith = undefined;
            this._notEquals = undefined;
            this._notStartsWith = undefined;
            this._startsWith = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endsWith = value.endsWith;
            this._equals = value.equalTo;
            this._field = value.field;
            this._notEndsWith = value.notEndsWith;
            this._notEquals = value.notEquals;
            this._notStartsWith = value.notStartsWith;
            this._startsWith = value.startsWith;
        }
    }

    // ends_with - computed: true, optional: true, required: false
    private _endsWith?: string[]; 
    public get endsWith() {
        return cdktn.Fn.tolist(this.getListAttribute('ends_with'));
    }
    public set endsWith(value: string[]) {
        this._endsWith = value;
    }
    public resetEndsWith() {
        this._endsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endsWithInput() {
        return this._endsWith;
    }

    // equals - computed: true, optional: true, required: false
    private _equals?: string[]; 
    public get equalTo() {
        return cdktn.Fn.tolist(this.getListAttribute('equals'));
    }
    public set equalTo(value: string[]) {
        this._equals = value;
    }
    public resetEqualTo() {
        this._equals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get equalToInput() {
        return this._equals;
    }

    // field - computed: true, optional: true, required: false
    private _field?: string; 
    public get field() {
        return this.getStringAttribute('field');
    }
    public set field(value: string) {
        this._field = value;
    }
    public resetField() {
        this._field = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldInput() {
        return this._field;
    }

    // not_ends_with - computed: true, optional: true, required: false
    private _notEndsWith?: string[]; 
    public get notEndsWith() {
        return cdktn.Fn.tolist(this.getListAttribute('not_ends_with'));
    }
    public set notEndsWith(value: string[]) {
        this._notEndsWith = value;
    }
    public resetNotEndsWith() {
        this._notEndsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notEndsWithInput() {
        return this._notEndsWith;
    }

    // not_equals - computed: true, optional: true, required: false
    private _notEquals?: string[]; 
    public get notEquals() {
        return cdktn.Fn.tolist(this.getListAttribute('not_equals'));
    }
    public set notEquals(value: string[]) {
        this._notEquals = value;
    }
    public resetNotEquals() {
        this._notEquals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notEqualsInput() {
        return this._notEquals;
    }

    // not_starts_with - computed: true, optional: true, required: false
    private _notStartsWith?: string[]; 
    public get notStartsWith() {
        return cdktn.Fn.tolist(this.getListAttribute('not_starts_with'));
    }
    public set notStartsWith(value: string[]) {
        this._notStartsWith = value;
    }
    public resetNotStartsWith() {
        this._notStartsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notStartsWithInput() {
        return this._notStartsWith;
    }

    // starts_with - computed: true, optional: true, required: false
    private _startsWith?: string[]; 
    public get startsWith() {
        return cdktn.Fn.tolist(this.getListAttribute('starts_with'));
    }
    public set startsWith(value: string[]) {
        this._startsWith = value;
    }
    public resetStartsWith() {
        this._startsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startsWithInput() {
        return this._startsWith;
    }
}

export class AdvancedFieldSelectorPropertyList extends cdktn.ComplexList {
    public internalValue? : AdvancedFieldSelectorProperty[] | cdktn.IResolvable

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
    public get(index: number): AdvancedFieldSelectorPropertyOutputReference {
        return new AdvancedFieldSelectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AdvancedEventSelectorProperty {
    /**
    * Contains all selector statements in an advanced event selector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#field_selectors CcEventDataStore#field_selectors}
    */
    readonly fieldSelectors?: AdvancedFieldSelectorProperty[] | cdktn.IResolvable;
    /**
    * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#name CcEventDataStore#name}
    */
    readonly name?: string;
}
export class AdvancedEventSelectorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdvancedEventSelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldSelectors?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldSelectors = this._fieldSelectors?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedEventSelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldSelectors.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldSelectors.internalValue = value.fieldSelectors;
            this._name = value.name;
        }
    }

    // field_selectors - computed: true, optional: true, required: false
    private _fieldSelectors = new AdvancedFieldSelectorPropertyList(this, "field_selectors", true);
    public get fieldSelectors() {
        return this._fieldSelectors;
    }
    public putFieldSelectors(value: AdvancedFieldSelectorProperty[] | cdktn.IResolvable) {
        this._fieldSelectors.internalValue = value;
    }
    public resetFieldSelectors() {
        this._fieldSelectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldSelectorsInput() {
        return this._fieldSelectors.internalValue;
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

export class AdvancedEventSelectorPropertyList extends cdktn.ComplexList {
    public internalValue? : AdvancedEventSelectorProperty[] | cdktn.IResolvable

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
    public get(index: number): AdvancedEventSelectorPropertyOutputReference {
        return new AdvancedEventSelectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContextKeySelectorProperty {
    /**
    * An operator that includes events that match the exact value of the event record field specified in Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#equals CcEventDataStore#equals}
    */
    readonly equalTo?: string[];
    /**
    * Specifies the type of the event record field in ContextKeySelector. Valid values include RequestContext, TagContext.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#type CcEventDataStore#type}
    */
    readonly type?: string;
}
export class ContextKeySelectorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContextKeySelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._equals !== undefined) {
            hasAnyValues = true;
            internalValueResult.equalTo = this._equals;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContextKeySelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._equals = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._equals = value.equalTo;
            this._type = value.type;
        }
    }

    // equals - computed: true, optional: true, required: false
    private _equals?: string[]; 
    public get equalTo() {
        return cdktn.Fn.tolist(this.getListAttribute('equals'));
    }
    public set equalTo(value: string[]) {
        this._equals = value;
    }
    public resetEqualTo() {
        this._equals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get equalToInput() {
        return this._equals;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class ContextKeySelectorPropertyList extends cdktn.ComplexList {
    public internalValue? : ContextKeySelectorProperty[] | cdktn.IResolvable

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
    public get(index: number): ContextKeySelectorPropertyOutputReference {
        return new ContextKeySelectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InsightSelectorProperty {
    /**
    * The type of Insights to log on an event data store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#insight_type CcEventDataStore#insight_type}
    */
    readonly insightType?: string;
}
export class InsightSelectorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InsightSelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._insightType !== undefined) {
            hasAnyValues = true;
            internalValueResult.insightType = this._insightType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InsightSelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._insightType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._insightType = value.insightType;
        }
    }

    // insight_type - computed: true, optional: true, required: false
    private _insightType?: string; 
    public get insightType() {
        return this.getStringAttribute('insight_type');
    }
    public set insightType(value: string) {
        this._insightType = value;
    }
    public resetInsightType() {
        this._insightType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insightTypeInput() {
        return this._insightType;
    }
}

export class InsightSelectorPropertyList extends cdktn.ComplexList {
    public internalValue? : InsightSelectorProperty[] | cdktn.IResolvable

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
    public get(index: number): InsightSelectorPropertyOutputReference {
        return new InsightSelectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#key CcEventDataStore#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_event_data_store#value CcEventDataStore#value}
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
