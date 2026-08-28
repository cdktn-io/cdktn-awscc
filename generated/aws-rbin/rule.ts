// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the retention rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#description CcRule#description}
    */
    readonly description?: string;
    /**
    * Information about the exclude resource tags used to identify resources that are excluded by the retention rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#exclude_resource_tags CcRule#exclude_resource_tags}
    */
    readonly excludeResourceTags?: CcRule.ResourceTagProperty[] | cdktn.IResolvable;
    /**
    * Information about the retention rule lock configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#lock_configuration CcRule#lock_configuration}
    */
    readonly lockConfiguration?: CcRule.UnlockDelayProperty;
    /**
    * Information about the resource tags used to identify resources that are retained by the retention rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#resource_tags CcRule#resource_tags}
    */
    readonly resourceTags?: CcRule.ResourceTagsProperty[] | cdktn.IResolvable;
    /**
    * The resource type retained by the retention rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#resource_type CcRule#resource_type}
    */
    readonly resourceType: string;
    /**
    * Information about the retention period for which the retention rule is to retain resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#retention_period CcRule#retention_period}
    */
    readonly retentionPeriod: CcRule.RetentionPeriodProperty;
    /**
    * The state of the retention rule. Only retention rules that are in the available state retain resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#status CcRule#status}
    */
    readonly status?: string;
    /**
    * Information about the tags assigned to the retention rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#tags CcRule#tags}
    */
    readonly tags?: CcRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule awscc_rbin_rule}
*/
export class CcRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rbin_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRule to import
    * @param importFromId The id of the existing CcRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rbin_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule awscc_rbin_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rbin_rule',
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
        this._description = config.description;
        this._excludeResourceTags.internalValue = config.excludeResourceTags;
        this._lockConfiguration.internalValue = config.lockConfiguration;
        this._resourceTags.internalValue = config.resourceTags;
        this._resourceType = config.resourceType;
        this._retentionPeriod.internalValue = config.retentionPeriod;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // exclude_resource_tags - computed: true, optional: true, required: false
    private _excludeResourceTags = new CcRule.ResourceTagPropertyList(this, "exclude_resource_tags", true);
    public get excludeResourceTags() {
        return this._excludeResourceTags;
    }
    public putExcludeResourceTags(value: CcRule.ResourceTagProperty[] | cdktn.IResolvable) {
        this._excludeResourceTags.internalValue = value;
    }
    public resetExcludeResourceTags() {
        this._excludeResourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeResourceTagsInput() {
        return this._excludeResourceTags.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: false, required: false
    public get identifier() {
        return this.getStringAttribute('identifier');
    }

    // lock_configuration - computed: true, optional: true, required: false
    private _lockConfiguration = new CcRule.UnlockDelayPropertyOutputReference(this, "lock_configuration");
    public get lockConfiguration() {
        return this._lockConfiguration;
    }
    public putLockConfiguration(value: CcRule.UnlockDelayProperty) {
        this._lockConfiguration.internalValue = value;
    }
    public resetLockConfiguration() {
        this._lockConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lockConfigurationInput() {
        return this._lockConfiguration.internalValue;
    }

    // lock_state - computed: true, optional: false, required: false
    public get lockState() {
        return this.getStringAttribute('lock_state');
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new CcRule.ResourceTagsPropertyList(this, "resource_tags", true);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: CcRule.ResourceTagsProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // resource_type - computed: false, optional: false, required: true
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // retention_period - computed: false, optional: false, required: true
    private _retentionPeriod = new CcRule.RetentionPeriodPropertyOutputReference(this, "retention_period");
    public get retentionPeriod() {
        return this._retentionPeriod;
    }
    public putRetentionPeriod(value: CcRule.RetentionPeriodProperty) {
        this._retentionPeriod.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInput() {
        return this._retentionPeriod.internalValue;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRule.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            exclude_resource_tags: cdktn.listMapper(ccRuleResourceTagPropertyToTerraform, false)(this._excludeResourceTags.internalValue),
            lock_configuration: ccRuleUnlockDelayPropertyToTerraform(this._lockConfiguration.internalValue),
            resource_tags: cdktn.listMapper(ccRuleResourceTagsPropertyToTerraform, false)(this._resourceTags.internalValue),
            resource_type: cdktn.stringToTerraform(this._resourceType),
            retention_period: ccRuleRetentionPeriodPropertyToTerraform(this._retentionPeriod.internalValue),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclude_resource_tags: {
                value: cdktn.listMapperHcl(ccRuleResourceTagPropertyToHclTerraform, false)(this._excludeResourceTags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRule.ResourceTagPropertyList",
            },
            lock_configuration: {
                value: ccRuleUnlockDelayPropertyToHclTerraform(this._lockConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRule.UnlockDelayProperty",
            },
            resource_tags: {
                value: cdktn.listMapperHcl(ccRuleResourceTagsPropertyToHclTerraform, false)(this._resourceTags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRule.ResourceTagsPropertyList",
            },
            resource_type: {
                value: cdktn.stringToHclTerraform(this._resourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retention_period: {
                value: ccRuleRetentionPeriodPropertyToHclTerraform(this._retentionPeriod.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRule.RetentionPeriodProperty",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRuleResourceTagPropertyToTerraform(struct?: CcRule.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_tag_key: cdktn.stringToTerraform(struct!.resourceTagKey),
        resource_tag_value: cdktn.stringToTerraform(struct!.resourceTagValue),
    }
}


export function ccRuleResourceTagPropertyToHclTerraform(struct?: CcRule.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_tag_key: {
            value: cdktn.stringToHclTerraform(struct!.resourceTagKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_tag_value: {
            value: cdktn.stringToHclTerraform(struct!.resourceTagValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleUnlockDelayPropertyToTerraform(struct?: CcRule.UnlockDelayProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unlock_delay_unit: cdktn.stringToTerraform(struct!.unlockDelayUnit),
        unlock_delay_value: cdktn.numberToTerraform(struct!.unlockDelayValue),
    }
}


export function ccRuleUnlockDelayPropertyToHclTerraform(struct?: CcRule.UnlockDelayProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unlock_delay_unit: {
            value: cdktn.stringToHclTerraform(struct!.unlockDelayUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unlock_delay_value: {
            value: cdktn.numberToHclTerraform(struct!.unlockDelayValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleResourceTagsPropertyToTerraform(struct?: CcRule.ResourceTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_tag_key: cdktn.stringToTerraform(struct!.resourceTagKey),
        resource_tag_value: cdktn.stringToTerraform(struct!.resourceTagValue),
    }
}


export function ccRuleResourceTagsPropertyToHclTerraform(struct?: CcRule.ResourceTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_tag_key: {
            value: cdktn.stringToHclTerraform(struct!.resourceTagKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_tag_value: {
            value: cdktn.stringToHclTerraform(struct!.resourceTagValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleRetentionPeriodPropertyToTerraform(struct?: CcRule.RetentionPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        retention_period_unit: cdktn.stringToTerraform(struct!.retentionPeriodUnit),
        retention_period_value: cdktn.numberToTerraform(struct!.retentionPeriodValue),
    }
}


export function ccRuleRetentionPeriodPropertyToHclTerraform(struct?: CcRule.RetentionPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        retention_period_unit: {
            value: cdktn.stringToHclTerraform(struct!.retentionPeriodUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retention_period_value: {
            value: cdktn.numberToHclTerraform(struct!.retentionPeriodValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleTagPropertyToTerraform(struct?: CcRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRuleTagPropertyToHclTerraform(struct?: CcRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRule {
export interface ResourceTagProperty {
    /**
    * The tag key of the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#resource_tag_key CcRule#resource_tag_key}
    */
    readonly resourceTagKey?: string;
    /**
    * The tag value of the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#resource_tag_value CcRule#resource_tag_value}
    */
    readonly resourceTagValue?: string;
}
export class ResourceTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceTagKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTagKey = this._resourceTagKey;
        }
        if (this._resourceTagValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTagValue = this._resourceTagValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceTagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceTagKey = undefined;
            this._resourceTagValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceTagKey = value.resourceTagKey;
            this._resourceTagValue = value.resourceTagValue;
        }
    }

    // resource_tag_key - computed: true, optional: true, required: false
    private _resourceTagKey?: string; 
    public get resourceTagKey() {
        return this.getStringAttribute('resource_tag_key');
    }
    public set resourceTagKey(value: string) {
        this._resourceTagKey = value;
    }
    public resetResourceTagKey() {
        this._resourceTagKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagKeyInput() {
        return this._resourceTagKey;
    }

    // resource_tag_value - computed: true, optional: true, required: false
    private _resourceTagValue?: string; 
    public get resourceTagValue() {
        return this.getStringAttribute('resource_tag_value');
    }
    public set resourceTagValue(value: string) {
        this._resourceTagValue = value;
    }
    public resetResourceTagValue() {
        this._resourceTagValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagValueInput() {
        return this._resourceTagValue;
    }
}

export class ResourceTagPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagPropertyOutputReference {
        return new ResourceTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UnlockDelayProperty {
    /**
    * The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#unlock_delay_unit CcRule#unlock_delay_unit}
    */
    readonly unlockDelayUnit?: string;
    /**
    * The unlock delay period, measured in the unit specified for UnlockDelayUnit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#unlock_delay_value CcRule#unlock_delay_value}
    */
    readonly unlockDelayValue?: number;
}
export class UnlockDelayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UnlockDelayProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unlockDelayUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unlockDelayUnit = this._unlockDelayUnit;
        }
        if (this._unlockDelayValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.unlockDelayValue = this._unlockDelayValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UnlockDelayProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unlockDelayUnit = undefined;
            this._unlockDelayValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unlockDelayUnit = value.unlockDelayUnit;
            this._unlockDelayValue = value.unlockDelayValue;
        }
    }

    // unlock_delay_unit - computed: true, optional: true, required: false
    private _unlockDelayUnit?: string; 
    public get unlockDelayUnit() {
        return this.getStringAttribute('unlock_delay_unit');
    }
    public set unlockDelayUnit(value: string) {
        this._unlockDelayUnit = value;
    }
    public resetUnlockDelayUnit() {
        this._unlockDelayUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unlockDelayUnitInput() {
        return this._unlockDelayUnit;
    }

    // unlock_delay_value - computed: true, optional: true, required: false
    private _unlockDelayValue?: number; 
    public get unlockDelayValue() {
        return this.getNumberAttribute('unlock_delay_value');
    }
    public set unlockDelayValue(value: number) {
        this._unlockDelayValue = value;
    }
    public resetUnlockDelayValue() {
        this._unlockDelayValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unlockDelayValueInput() {
        return this._unlockDelayValue;
    }
}
export interface ResourceTagsProperty {
    /**
    * The tag key of the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#resource_tag_key CcRule#resource_tag_key}
    */
    readonly resourceTagKey?: string;
    /**
    * The tag value of the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#resource_tag_value CcRule#resource_tag_value}
    */
    readonly resourceTagValue?: string;
}
export class ResourceTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceTagKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTagKey = this._resourceTagKey;
        }
        if (this._resourceTagValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTagValue = this._resourceTagValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceTagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceTagKey = undefined;
            this._resourceTagValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceTagKey = value.resourceTagKey;
            this._resourceTagValue = value.resourceTagValue;
        }
    }

    // resource_tag_key - computed: true, optional: true, required: false
    private _resourceTagKey?: string; 
    public get resourceTagKey() {
        return this.getStringAttribute('resource_tag_key');
    }
    public set resourceTagKey(value: string) {
        this._resourceTagKey = value;
    }
    public resetResourceTagKey() {
        this._resourceTagKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagKeyInput() {
        return this._resourceTagKey;
    }

    // resource_tag_value - computed: true, optional: true, required: false
    private _resourceTagValue?: string; 
    public get resourceTagValue() {
        return this.getStringAttribute('resource_tag_value');
    }
    public set resourceTagValue(value: string) {
        this._resourceTagValue = value;
    }
    public resetResourceTagValue() {
        this._resourceTagValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagValueInput() {
        return this._resourceTagValue;
    }
}

export class ResourceTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagsPropertyOutputReference {
        return new ResourceTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RetentionPeriodProperty {
    /**
    * The retention period unit of the rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#retention_period_unit CcRule#retention_period_unit}
    */
    readonly retentionPeriodUnit: string;
    /**
    * The retention period value of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#retention_period_value CcRule#retention_period_value}
    */
    readonly retentionPeriodValue: number;
}
export class RetentionPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetentionPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._retentionPeriodUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionPeriodUnit = this._retentionPeriodUnit;
        }
        if (this._retentionPeriodValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionPeriodValue = this._retentionPeriodValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetentionPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._retentionPeriodUnit = undefined;
            this._retentionPeriodValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._retentionPeriodUnit = value.retentionPeriodUnit;
            this._retentionPeriodValue = value.retentionPeriodValue;
        }
    }

    // retention_period_unit - computed: false, optional: false, required: true
    private _retentionPeriodUnit?: string; 
    public get retentionPeriodUnit() {
        return this.getStringAttribute('retention_period_unit');
    }
    public set retentionPeriodUnit(value: string) {
        this._retentionPeriodUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodUnitInput() {
        return this._retentionPeriodUnit;
    }

    // retention_period_value - computed: false, optional: false, required: true
    private _retentionPeriodValue?: number; 
    public get retentionPeriodValue() {
        return this.getNumberAttribute('retention_period_value');
    }
    public set retentionPeriodValue(value: number) {
        this._retentionPeriodValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodValueInput() {
        return this._retentionPeriodValue;
    }
}
export interface TagProperty {
    /**
    * A unique identifier for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#key CcRule#key}
    */
    readonly key?: string;
    /**
    * String which you can use to describe or define the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rbin_rule#value CcRule#value}
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
