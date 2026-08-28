// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_vdm_attributes

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVdmAttributesProps extends cdktn.TerraformMetaArguments {
    /**
    * Preferences regarding the Dashboard feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_vdm_attributes#dashboard_attributes CcVdmAttributes#dashboard_attributes}
    */
    readonly dashboardAttributes?: CcVdmAttributes.DashboardAttributesProperty;
    /**
    * Preferences regarding the Guardian feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_vdm_attributes#guardian_attributes CcVdmAttributes#guardian_attributes}
    */
    readonly guardianAttributes?: CcVdmAttributes.GuardianAttributesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_vdm_attributes awscc_ses_vdm_attributes}
*/
export class CcVdmAttributes extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_vdm_attributes";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVdmAttributes resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVdmAttributes to import
    * @param importFromId The id of the existing CcVdmAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_vdm_attributes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVdmAttributes to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_vdm_attributes", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_vdm_attributes awscc_ses_vdm_attributes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVdmAttributesProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcVdmAttributesProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_vdm_attributes',
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
        this._dashboardAttributes.internalValue = config.dashboardAttributes;
        this._guardianAttributes.internalValue = config.guardianAttributes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dashboard_attributes - computed: true, optional: true, required: false
    private _dashboardAttributes = new CcVdmAttributes.DashboardAttributesPropertyOutputReference(this, "dashboard_attributes");
    public get dashboardAttributes() {
        return this._dashboardAttributes;
    }
    public putDashboardAttributes(value: CcVdmAttributes.DashboardAttributesProperty) {
        this._dashboardAttributes.internalValue = value;
    }
    public resetDashboardAttributes() {
        this._dashboardAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardAttributesInput() {
        return this._dashboardAttributes.internalValue;
    }

    // guardian_attributes - computed: true, optional: true, required: false
    private _guardianAttributes = new CcVdmAttributes.GuardianAttributesPropertyOutputReference(this, "guardian_attributes");
    public get guardianAttributes() {
        return this._guardianAttributes;
    }
    public putGuardianAttributes(value: CcVdmAttributes.GuardianAttributesProperty) {
        this._guardianAttributes.internalValue = value;
    }
    public resetGuardianAttributes() {
        this._guardianAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guardianAttributesInput() {
        return this._guardianAttributes.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // vdm_attributes_resource_id - computed: true, optional: false, required: false
    public get vdmAttributesResourceId() {
        return this.getStringAttribute('vdm_attributes_resource_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            dashboard_attributes: ccVdmAttributesDashboardAttributesPropertyToTerraform(this._dashboardAttributes.internalValue),
            guardian_attributes: ccVdmAttributesGuardianAttributesPropertyToTerraform(this._guardianAttributes.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dashboard_attributes: {
                value: ccVdmAttributesDashboardAttributesPropertyToHclTerraform(this._dashboardAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVdmAttributes.DashboardAttributesProperty",
            },
            guardian_attributes: {
                value: ccVdmAttributesGuardianAttributesPropertyToHclTerraform(this._guardianAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVdmAttributes.GuardianAttributesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVdmAttributesDashboardAttributesPropertyToTerraform(struct?: CcVdmAttributes.DashboardAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        engagement_metrics: cdktn.stringToTerraform(struct!.engagementMetrics),
    }
}


export function ccVdmAttributesDashboardAttributesPropertyToHclTerraform(struct?: CcVdmAttributes.DashboardAttributesProperty | cdktn.IResolvable): any {
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


export function ccVdmAttributesGuardianAttributesPropertyToTerraform(struct?: CcVdmAttributes.GuardianAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        optimized_shared_delivery: cdktn.stringToTerraform(struct!.optimizedSharedDelivery),
    }
}


export function ccVdmAttributesGuardianAttributesPropertyToHclTerraform(struct?: CcVdmAttributes.GuardianAttributesProperty | cdktn.IResolvable): any {
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


export namespace CcVdmAttributes {
export interface DashboardAttributesProperty {
    /**
    * Whether emails sent from this account have engagement tracking enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_vdm_attributes#engagement_metrics CcVdmAttributes#engagement_metrics}
    */
    readonly engagementMetrics?: string;
}
export class DashboardAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashboardAttributesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DashboardAttributesProperty | cdktn.IResolvable | undefined) {
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
export interface GuardianAttributesProperty {
    /**
    * Whether emails sent from this account have optimized delivery algorithm enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_vdm_attributes#optimized_shared_delivery CcVdmAttributes#optimized_shared_delivery}
    */
    readonly optimizedSharedDelivery?: string;
}
export class GuardianAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GuardianAttributesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: GuardianAttributesProperty | cdktn.IResolvable | undefined) {
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
}
