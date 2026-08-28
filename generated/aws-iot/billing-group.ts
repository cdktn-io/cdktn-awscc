// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBillingGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group#billing_group_name CcBillingGroup#billing_group_name}
    */
    readonly billingGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group#billing_group_properties CcBillingGroup#billing_group_properties}
    */
    readonly billingGroupProperties?: CcBillingGroup.BillingGroupPropertiesProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group#tags CcBillingGroup#tags}
    */
    readonly tags?: CcBillingGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group awscc_iot_billing_group}
*/
export class CcBillingGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_billing_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBillingGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBillingGroup to import
    * @param importFromId The id of the existing CcBillingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBillingGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_billing_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group awscc_iot_billing_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBillingGroupProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcBillingGroupProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_billing_group',
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
        this._billingGroupName = config.billingGroupName;
        this._billingGroupProperties.internalValue = config.billingGroupProperties;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // billing_group_id - computed: true, optional: false, required: false
    public get billingGroupId() {
        return this.getStringAttribute('billing_group_id');
    }

    // billing_group_name - computed: true, optional: true, required: false
    private _billingGroupName?: string; 
    public get billingGroupName() {
        return this.getStringAttribute('billing_group_name');
    }
    public set billingGroupName(value: string) {
        this._billingGroupName = value;
    }
    public resetBillingGroupName() {
        this._billingGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingGroupNameInput() {
        return this._billingGroupName;
    }

    // billing_group_properties - computed: true, optional: true, required: false
    private _billingGroupProperties = new CcBillingGroup.BillingGroupPropertiesPropertyOutputReference(this, "billing_group_properties");
    public get billingGroupProperties() {
        return this._billingGroupProperties;
    }
    public putBillingGroupProperties(value: CcBillingGroup.BillingGroupPropertiesProperty) {
        this._billingGroupProperties.internalValue = value;
    }
    public resetBillingGroupProperties() {
        this._billingGroupProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingGroupPropertiesInput() {
        return this._billingGroupProperties.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcBillingGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcBillingGroup.TagProperty[] | cdktn.IResolvable) {
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
            billing_group_name: cdktn.stringToTerraform(this._billingGroupName),
            billing_group_properties: ccBillingGroupBillingGroupPropertiesPropertyToTerraform(this._billingGroupProperties.internalValue),
            tags: cdktn.listMapper(ccBillingGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            billing_group_name: {
                value: cdktn.stringToHclTerraform(this._billingGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            billing_group_properties: {
                value: ccBillingGroupBillingGroupPropertiesPropertyToHclTerraform(this._billingGroupProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBillingGroup.BillingGroupPropertiesProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccBillingGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcBillingGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBillingGroupBillingGroupPropertiesPropertyToTerraform(struct?: CcBillingGroup.BillingGroupPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        billing_group_description: cdktn.stringToTerraform(struct!.billingGroupDescription),
    }
}


export function ccBillingGroupBillingGroupPropertiesPropertyToHclTerraform(struct?: CcBillingGroup.BillingGroupPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        billing_group_description: {
            value: cdktn.stringToHclTerraform(struct!.billingGroupDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBillingGroupTagPropertyToTerraform(struct?: CcBillingGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBillingGroupTagPropertyToHclTerraform(struct?: CcBillingGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcBillingGroup {
export interface BillingGroupPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group#billing_group_description CcBillingGroup#billing_group_description}
    */
    readonly billingGroupDescription?: string;
}
export class BillingGroupPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BillingGroupPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._billingGroupDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingGroupDescription = this._billingGroupDescription;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BillingGroupPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._billingGroupDescription = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._billingGroupDescription = value.billingGroupDescription;
        }
    }

    // billing_group_description - computed: true, optional: true, required: false
    private _billingGroupDescription?: string; 
    public get billingGroupDescription() {
        return this.getStringAttribute('billing_group_description');
    }
    public set billingGroupDescription(value: string) {
        this._billingGroupDescription = value;
    }
    public resetBillingGroupDescription() {
        this._billingGroupDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingGroupDescriptionInput() {
        return this._billingGroupDescription;
    }
}
export interface TagProperty {
    /**
    * Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group#key CcBillingGroup#key}
    */
    readonly key?: string;
    /**
    * Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_billing_group#value CcBillingGroup#value}
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
