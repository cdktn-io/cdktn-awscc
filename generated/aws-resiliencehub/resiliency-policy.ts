// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResiliencyPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Data Location Constraint of the Policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#data_location_constraint CcResiliencyPolicy#data_location_constraint}
    */
    readonly dataLocationConstraint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#policy CcResiliencyPolicy#policy}
    */
    readonly policy: CcResiliencyPolicy.FailurePolicyProperty;
    /**
    * Description of Resiliency Policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#policy_description CcResiliencyPolicy#policy_description}
    */
    readonly policyDescription?: string;
    /**
    * Name of Resiliency Policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#policy_name CcResiliencyPolicy#policy_name}
    */
    readonly policyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#tags CcResiliencyPolicy#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Resiliency Policy Tier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#tier CcResiliencyPolicy#tier}
    */
    readonly tier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy}
*/
export class CcResiliencyPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_resiliencehub_resiliency_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResiliencyPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResiliencyPolicy to import
    * @param importFromId The id of the existing CcResiliencyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResiliencyPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehub_resiliency_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResiliencyPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcResiliencyPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_resiliencehub_resiliency_policy',
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
        this._dataLocationConstraint = config.dataLocationConstraint;
        this._policy.internalValue = config.policy;
        this._policyDescription = config.policyDescription;
        this._policyName = config.policyName;
        this._tags = config.tags;
        this._tier = config.tier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_location_constraint - computed: true, optional: true, required: false
    private _dataLocationConstraint?: string; 
    public get dataLocationConstraint() {
        return this.getStringAttribute('data_location_constraint');
    }
    public set dataLocationConstraint(value: string) {
        this._dataLocationConstraint = value;
    }
    public resetDataLocationConstraint() {
        this._dataLocationConstraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataLocationConstraintInput() {
        return this._dataLocationConstraint;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy = new CcResiliencyPolicy.FailurePolicyPropertyOutputReference(this, "policy");
    public get policy() {
        return this._policy;
    }
    public putPolicy(value: CcResiliencyPolicy.FailurePolicyProperty) {
        this._policy.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy.internalValue;
    }

    // policy_arn - computed: true, optional: false, required: false
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }

    // policy_description - computed: true, optional: true, required: false
    private _policyDescription?: string; 
    public get policyDescription() {
        return this.getStringAttribute('policy_description');
    }
    public set policyDescription(value: string) {
        this._policyDescription = value;
    }
    public resetPolicyDescription() {
        this._policyDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDescriptionInput() {
        return this._policyDescription;
    }

    // policy_name - computed: false, optional: false, required: true
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // tier - computed: false, optional: false, required: true
    private _tier?: string; 
    public get tier() {
        return this.getStringAttribute('tier');
    }
    public set tier(value: string) {
        this._tier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
        return this._tier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_location_constraint: cdktn.stringToTerraform(this._dataLocationConstraint),
            policy: ccResiliencyPolicyFailurePolicyPropertyToTerraform(this._policy.internalValue),
            policy_description: cdktn.stringToTerraform(this._policyDescription),
            policy_name: cdktn.stringToTerraform(this._policyName),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            tier: cdktn.stringToTerraform(this._tier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_location_constraint: {
                value: cdktn.stringToHclTerraform(this._dataLocationConstraint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: ccResiliencyPolicyFailurePolicyPropertyToHclTerraform(this._policy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResiliencyPolicy.FailurePolicyProperty",
            },
            policy_description: {
                value: cdktn.stringToHclTerraform(this._policyDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_name: {
                value: cdktn.stringToHclTerraform(this._policyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tier: {
                value: cdktn.stringToHclTerraform(this._tier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResiliencyPolicyAzPropertyToTerraform(struct?: CcResiliencyPolicy.AzProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rpo_in_secs: cdktn.numberToTerraform(struct!.rpoInSecs),
        rto_in_secs: cdktn.numberToTerraform(struct!.rtoInSecs),
    }
}


export function ccResiliencyPolicyAzPropertyToHclTerraform(struct?: CcResiliencyPolicy.AzProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rpo_in_secs: {
            value: cdktn.numberToHclTerraform(struct!.rpoInSecs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rto_in_secs: {
            value: cdktn.numberToHclTerraform(struct!.rtoInSecs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResiliencyPolicyHardwarePropertyToTerraform(struct?: CcResiliencyPolicy.HardwareProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rpo_in_secs: cdktn.numberToTerraform(struct!.rpoInSecs),
        rto_in_secs: cdktn.numberToTerraform(struct!.rtoInSecs),
    }
}


export function ccResiliencyPolicyHardwarePropertyToHclTerraform(struct?: CcResiliencyPolicy.HardwareProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rpo_in_secs: {
            value: cdktn.numberToHclTerraform(struct!.rpoInSecs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rto_in_secs: {
            value: cdktn.numberToHclTerraform(struct!.rtoInSecs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResiliencyPolicyRegionPropertyToTerraform(struct?: CcResiliencyPolicy.RegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rpo_in_secs: cdktn.numberToTerraform(struct!.rpoInSecs),
        rto_in_secs: cdktn.numberToTerraform(struct!.rtoInSecs),
    }
}


export function ccResiliencyPolicyRegionPropertyToHclTerraform(struct?: CcResiliencyPolicy.RegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rpo_in_secs: {
            value: cdktn.numberToHclTerraform(struct!.rpoInSecs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rto_in_secs: {
            value: cdktn.numberToHclTerraform(struct!.rtoInSecs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResiliencyPolicySoftwarePropertyToTerraform(struct?: CcResiliencyPolicy.SoftwareProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rpo_in_secs: cdktn.numberToTerraform(struct!.rpoInSecs),
        rto_in_secs: cdktn.numberToTerraform(struct!.rtoInSecs),
    }
}


export function ccResiliencyPolicySoftwarePropertyToHclTerraform(struct?: CcResiliencyPolicy.SoftwareProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rpo_in_secs: {
            value: cdktn.numberToHclTerraform(struct!.rpoInSecs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rto_in_secs: {
            value: cdktn.numberToHclTerraform(struct!.rtoInSecs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResiliencyPolicyFailurePolicyPropertyToTerraform(struct?: CcResiliencyPolicy.FailurePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        az: ccResiliencyPolicyAzPropertyToTerraform(struct!.az),
        hardware: ccResiliencyPolicyHardwarePropertyToTerraform(struct!.hardware),
        region: ccResiliencyPolicyRegionPropertyToTerraform(struct!.region),
        software: ccResiliencyPolicySoftwarePropertyToTerraform(struct!.softwareAttribute),
    }
}


export function ccResiliencyPolicyFailurePolicyPropertyToHclTerraform(struct?: CcResiliencyPolicy.FailurePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        az: {
            value: ccResiliencyPolicyAzPropertyToHclTerraform(struct!.az),
            isBlock: true,
            type: "struct",
            storageClassType: "AzProperty",
        },
        hardware: {
            value: ccResiliencyPolicyHardwarePropertyToHclTerraform(struct!.hardware),
            isBlock: true,
            type: "struct",
            storageClassType: "HardwareProperty",
        },
        region: {
            value: ccResiliencyPolicyRegionPropertyToHclTerraform(struct!.region),
            isBlock: true,
            type: "struct",
            storageClassType: "RegionProperty",
        },
        software: {
            value: ccResiliencyPolicySoftwarePropertyToHclTerraform(struct!.softwareAttribute),
            isBlock: true,
            type: "struct",
            storageClassType: "SoftwareProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcResiliencyPolicy {
export interface AzProperty {
    /**
    * RPO in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs CcResiliencyPolicy#rpo_in_secs}
    */
    readonly rpoInSecs: number;
    /**
    * RTO in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#rto_in_secs CcResiliencyPolicy#rto_in_secs}
    */
    readonly rtoInSecs: number;
}
export class AzPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rpoInSecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.rpoInSecs = this._rpoInSecs;
        }
        if (this._rtoInSecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtoInSecs = this._rtoInSecs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rpoInSecs = undefined;
            this._rtoInSecs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rpoInSecs = value.rpoInSecs;
            this._rtoInSecs = value.rtoInSecs;
        }
    }

    // rpo_in_secs - computed: false, optional: false, required: true
    private _rpoInSecs?: number; 
    public get rpoInSecs() {
        return this.getNumberAttribute('rpo_in_secs');
    }
    public set rpoInSecs(value: number) {
        this._rpoInSecs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rpoInSecsInput() {
        return this._rpoInSecs;
    }

    // rto_in_secs - computed: false, optional: false, required: true
    private _rtoInSecs?: number; 
    public get rtoInSecs() {
        return this.getNumberAttribute('rto_in_secs');
    }
    public set rtoInSecs(value: number) {
        this._rtoInSecs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rtoInSecsInput() {
        return this._rtoInSecs;
    }
}
export interface HardwareProperty {
    /**
    * RPO in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs CcResiliencyPolicy#rpo_in_secs}
    */
    readonly rpoInSecs: number;
    /**
    * RTO in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#rto_in_secs CcResiliencyPolicy#rto_in_secs}
    */
    readonly rtoInSecs: number;
}
export class HardwarePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HardwareProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rpoInSecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.rpoInSecs = this._rpoInSecs;
        }
        if (this._rtoInSecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtoInSecs = this._rtoInSecs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HardwareProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rpoInSecs = undefined;
            this._rtoInSecs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rpoInSecs = value.rpoInSecs;
            this._rtoInSecs = value.rtoInSecs;
        }
    }

    // rpo_in_secs - computed: false, optional: false, required: true
    private _rpoInSecs?: number; 
    public get rpoInSecs() {
        return this.getNumberAttribute('rpo_in_secs');
    }
    public set rpoInSecs(value: number) {
        this._rpoInSecs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rpoInSecsInput() {
        return this._rpoInSecs;
    }

    // rto_in_secs - computed: false, optional: false, required: true
    private _rtoInSecs?: number; 
    public get rtoInSecs() {
        return this.getNumberAttribute('rto_in_secs');
    }
    public set rtoInSecs(value: number) {
        this._rtoInSecs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rtoInSecsInput() {
        return this._rtoInSecs;
    }
}
export interface RegionProperty {
    /**
    * RPO in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs CcResiliencyPolicy#rpo_in_secs}
    */
    readonly rpoInSecs?: number;
    /**
    * RTO in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#rto_in_secs CcResiliencyPolicy#rto_in_secs}
    */
    readonly rtoInSecs?: number;
}
export class RegionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RegionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rpoInSecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.rpoInSecs = this._rpoInSecs;
        }
        if (this._rtoInSecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtoInSecs = this._rtoInSecs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rpoInSecs = undefined;
            this._rtoInSecs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rpoInSecs = value.rpoInSecs;
            this._rtoInSecs = value.rtoInSecs;
        }
    }

    // rpo_in_secs - computed: true, optional: true, required: false
    private _rpoInSecs?: number; 
    public get rpoInSecs() {
        return this.getNumberAttribute('rpo_in_secs');
    }
    public set rpoInSecs(value: number) {
        this._rpoInSecs = value;
    }
    public resetRpoInSecs() {
        this._rpoInSecs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rpoInSecsInput() {
        return this._rpoInSecs;
    }

    // rto_in_secs - computed: true, optional: true, required: false
    private _rtoInSecs?: number; 
    public get rtoInSecs() {
        return this.getNumberAttribute('rto_in_secs');
    }
    public set rtoInSecs(value: number) {
        this._rtoInSecs = value;
    }
    public resetRtoInSecs() {
        this._rtoInSecs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rtoInSecsInput() {
        return this._rtoInSecs;
    }
}
export interface SoftwareProperty {
    /**
    * RPO in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs CcResiliencyPolicy#rpo_in_secs}
    */
    readonly rpoInSecs: number;
    /**
    * RTO in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#rto_in_secs CcResiliencyPolicy#rto_in_secs}
    */
    readonly rtoInSecs: number;
}
export class SoftwarePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SoftwareProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rpoInSecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.rpoInSecs = this._rpoInSecs;
        }
        if (this._rtoInSecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtoInSecs = this._rtoInSecs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SoftwareProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rpoInSecs = undefined;
            this._rtoInSecs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rpoInSecs = value.rpoInSecs;
            this._rtoInSecs = value.rtoInSecs;
        }
    }

    // rpo_in_secs - computed: false, optional: false, required: true
    private _rpoInSecs?: number; 
    public get rpoInSecs() {
        return this.getNumberAttribute('rpo_in_secs');
    }
    public set rpoInSecs(value: number) {
        this._rpoInSecs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rpoInSecsInput() {
        return this._rpoInSecs;
    }

    // rto_in_secs - computed: false, optional: false, required: true
    private _rtoInSecs?: number; 
    public get rtoInSecs() {
        return this.getNumberAttribute('rto_in_secs');
    }
    public set rtoInSecs(value: number) {
        this._rtoInSecs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rtoInSecsInput() {
        return this._rtoInSecs;
    }
}
export interface FailurePolicyProperty {
    /**
    * Failure Policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#az CcResiliencyPolicy#az}
    */
    readonly az: AzProperty;
    /**
    * Failure Policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#hardware CcResiliencyPolicy#hardware}
    */
    readonly hardware: HardwareProperty;
    /**
    * Failure Policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#region CcResiliencyPolicy#region}
    */
    readonly region?: RegionProperty;
    /**
    * Failure Policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehub_resiliency_policy#software CcResiliencyPolicy#software}
    */
    readonly softwareAttribute: SoftwareProperty;
}
export class FailurePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FailurePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._az?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.az = this._az?.internalValue;
        }
        if (this._hardware?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hardware = this._hardware?.internalValue;
        }
        if (this._region?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region?.internalValue;
        }
        if (this._software?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.softwareAttribute = this._software?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FailurePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._az.internalValue = undefined;
            this._hardware.internalValue = undefined;
            this._region.internalValue = undefined;
            this._software.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._az.internalValue = value.az;
            this._hardware.internalValue = value.hardware;
            this._region.internalValue = value.region;
            this._software.internalValue = value.softwareAttribute;
        }
    }

    // az - computed: false, optional: false, required: true
    private _az = new AzPropertyOutputReference(this, "az");
    public get az() {
        return this._az;
    }
    public putAz(value: AzProperty) {
        this._az.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get azInput() {
        return this._az.internalValue;
    }

    // hardware - computed: false, optional: false, required: true
    private _hardware = new HardwarePropertyOutputReference(this, "hardware");
    public get hardware() {
        return this._hardware;
    }
    public putHardware(value: HardwareProperty) {
        this._hardware.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hardwareInput() {
        return this._hardware.internalValue;
    }

    // region - computed: true, optional: true, required: false
    private _region = new RegionPropertyOutputReference(this, "region");
    public get region() {
        return this._region;
    }
    public putRegion(value: RegionProperty) {
        this._region.internalValue = value;
    }
    public resetRegion() {
        this._region.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region.internalValue;
    }

    // software - computed: false, optional: false, required: true
    private _software = new SoftwarePropertyOutputReference(this, "software");
    public get softwareAttribute() {
        return this._software;
    }
    public putSoftwareAttribute(value: SoftwareProperty) {
        this._software.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get softwareAttributeInput() {
        return this._software.internalValue;
    }
}
}
