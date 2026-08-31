// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule#event_pattern CcEventRule#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule#event_type CcEventRule#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule#notification_configuration_arn CcEventRule#notification_configuration_arn}
    */
    readonly notificationConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule#regions CcEventRule#regions}
    */
    readonly regions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule#source CcEventRule#source}
    */
    readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule awscc_notifications_event_rule}
*/
export class CcEventRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_notifications_event_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventRule to import
    * @param importFromId The id of the existing CcEventRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_notifications_event_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/notifications_event_rule awscc_notifications_event_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcEventRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_notifications_event_rule',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._eventPattern = config.eventPattern;
        this._eventType = config.eventType;
        this._notificationConfigurationArn = config.notificationConfigurationArn;
        this._regions = config.regions;
        this._source = config.source;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // event_pattern - computed: true, optional: true, required: false
    private _eventPattern?: string; 
    public get eventPattern() {
        return this.getStringAttribute('event_pattern');
    }
    public set eventPattern(value: string) {
        this._eventPattern = value;
    }
    public resetEventPattern() {
        this._eventPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventPatternInput() {
        return this._eventPattern;
    }

    // event_type - computed: false, optional: false, required: true
    private _eventType?: string; 
    public get eventType() {
        return this.getStringAttribute('event_type');
    }
    public set eventType(value: string) {
        this._eventType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeInput() {
        return this._eventType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_rules - computed: true, optional: false, required: false
    public get managedRules() {
        return this.getListAttribute('managed_rules');
    }

    // notification_configuration_arn - computed: false, optional: false, required: true
    private _notificationConfigurationArn?: string; 
    public get notificationConfigurationArn() {
        return this.getStringAttribute('notification_configuration_arn');
    }
    public set notificationConfigurationArn(value: string) {
        this._notificationConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationArnInput() {
        return this._notificationConfigurationArn;
    }

    // regions - computed: false, optional: false, required: true
    private _regions?: string[]; 
    public get regions() {
        return this.getListAttribute('regions');
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }

    // source - computed: false, optional: false, required: true
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // status_summary_by_region - computed: true, optional: false, required: false
    private _statusSummaryByRegion = new CcEventRule.StatusSummaryByRegionPropertyMap(this, "status_summary_by_region");
    public get statusSummaryByRegion() {
        return this._statusSummaryByRegion;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            event_pattern: cdktn.stringToTerraform(this._eventPattern),
            event_type: cdktn.stringToTerraform(this._eventType),
            notification_configuration_arn: cdktn.stringToTerraform(this._notificationConfigurationArn),
            regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
            source: cdktn.stringToTerraform(this._source),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            event_pattern: {
                value: cdktn.stringToHclTerraform(this._eventPattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_type: {
                value: cdktn.stringToHclTerraform(this._eventType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._notificationConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            source: {
                value: cdktn.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventRuleStatusSummaryByRegionPropertyToTerraform(struct?: CcEventRule.StatusSummaryByRegionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccEventRuleStatusSummaryByRegionPropertyToHclTerraform(struct?: CcEventRule.StatusSummaryByRegionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcEventRule {
export interface StatusSummaryByRegionProperty {
}
export class StatusSummaryByRegionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): StatusSummaryByRegionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatusSummaryByRegionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // reason - computed: true, optional: false, required: false
    public get reason() {
        return this.getStringAttribute('reason');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }
}

export class StatusSummaryByRegionPropertyMap extends cdktn.ComplexMap {

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): StatusSummaryByRegionPropertyOutputReference {
        return new StatusSummaryByRegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
}
