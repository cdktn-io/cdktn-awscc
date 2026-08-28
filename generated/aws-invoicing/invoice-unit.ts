// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInvoiceUnitProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#description CcInvoiceUnit#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#invoice_receiver CcInvoiceUnit#invoice_receiver}
    */
    readonly invoiceReceiver: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#name CcInvoiceUnit#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#resource_tags CcInvoiceUnit#resource_tags}
    */
    readonly resourceTags?: CcInvoiceUnit.ResourceTagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#rule CcInvoiceUnit#rule}
    */
    readonly rule: CcInvoiceUnit.RuleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled CcInvoiceUnit#tax_inheritance_disabled}
    */
    readonly taxInheritanceDisabled?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit awscc_invoicing_invoice_unit}
*/
export class CcInvoiceUnit extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_invoicing_invoice_unit";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInvoiceUnit resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInvoiceUnit to import
    * @param importFromId The id of the existing CcInvoiceUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInvoiceUnit to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_invoicing_invoice_unit", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit awscc_invoicing_invoice_unit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInvoiceUnitProps
    */
    public constructor(scope: Construct, id: string, config: CcInvoiceUnitProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_invoicing_invoice_unit',
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
        this._invoiceReceiver = config.invoiceReceiver;
        this._name = config.name;
        this._resourceTags.internalValue = config.resourceTags;
        this._rule.internalValue = config.rule;
        this._taxInheritanceDisabled = config.taxInheritanceDisabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // invoice_receiver - computed: false, optional: false, required: true
    private _invoiceReceiver?: string; 
    public get invoiceReceiver() {
        return this.getStringAttribute('invoice_receiver');
    }
    public set invoiceReceiver(value: string) {
        this._invoiceReceiver = value;
    }
    // Temporarily expose input value. Use with caution.
    public get invoiceReceiverInput() {
        return this._invoiceReceiver;
    }

    // invoice_unit_arn - computed: true, optional: false, required: false
    public get invoiceUnitArn() {
        return this.getStringAttribute('invoice_unit_arn');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
        return this.getNumberAttribute('last_modified');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new CcInvoiceUnit.ResourceTagPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: CcInvoiceUnit.ResourceTagProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // rule - computed: false, optional: false, required: true
    private _rule = new CcInvoiceUnit.RulePropertyOutputReference(this, "rule");
    public get rule() {
        return this._rule;
    }
    public putRule(value: CcInvoiceUnit.RuleProperty) {
        this._rule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
        return this._rule.internalValue;
    }

    // tax_inheritance_disabled - computed: true, optional: true, required: false
    private _taxInheritanceDisabled?: boolean | cdktn.IResolvable; 
    public get taxInheritanceDisabled() {
        return this.getBooleanAttribute('tax_inheritance_disabled');
    }
    public set taxInheritanceDisabled(value: boolean | cdktn.IResolvable) {
        this._taxInheritanceDisabled = value;
    }
    public resetTaxInheritanceDisabled() {
        this._taxInheritanceDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taxInheritanceDisabledInput() {
        return this._taxInheritanceDisabled;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            invoice_receiver: cdktn.stringToTerraform(this._invoiceReceiver),
            name: cdktn.stringToTerraform(this._name),
            resource_tags: cdktn.listMapper(ccInvoiceUnitResourceTagPropertyToTerraform, false)(this._resourceTags.internalValue),
            rule: ccInvoiceUnitRulePropertyToTerraform(this._rule.internalValue),
            tax_inheritance_disabled: cdktn.booleanToTerraform(this._taxInheritanceDisabled),
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
            invoice_receiver: {
                value: cdktn.stringToHclTerraform(this._invoiceReceiver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_tags: {
                value: cdktn.listMapperHcl(ccInvoiceUnitResourceTagPropertyToHclTerraform, false)(this._resourceTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInvoiceUnit.ResourceTagPropertyList",
            },
            rule: {
                value: ccInvoiceUnitRulePropertyToHclTerraform(this._rule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInvoiceUnit.RuleProperty",
            },
            tax_inheritance_disabled: {
                value: cdktn.booleanToHclTerraform(this._taxInheritanceDisabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInvoiceUnitResourceTagPropertyToTerraform(struct?: CcInvoiceUnit.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInvoiceUnitResourceTagPropertyToHclTerraform(struct?: CcInvoiceUnit.ResourceTagProperty | cdktn.IResolvable): any {
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


export function ccInvoiceUnitRulePropertyToTerraform(struct?: CcInvoiceUnit.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        linked_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.linkedAccounts),
    }
}


export function ccInvoiceUnitRulePropertyToHclTerraform(struct?: CcInvoiceUnit.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        linked_accounts: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.linkedAccounts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInvoiceUnit {
export interface ResourceTagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#key CcInvoiceUnit#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#value CcInvoiceUnit#value}
    */
    readonly value?: string;
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

    public set internalValue(value: ResourceTagProperty | cdktn.IResolvable | undefined) {
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
export interface RuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/invoicing_invoice_unit#linked_accounts CcInvoiceUnit#linked_accounts}
    */
    readonly linkedAccounts: string[];
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._linkedAccounts !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedAccounts = this._linkedAccounts;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._linkedAccounts = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._linkedAccounts = value.linkedAccounts;
        }
    }

    // linked_accounts - computed: false, optional: false, required: true
    private _linkedAccounts?: string[]; 
    public get linkedAccounts() {
        return this.getListAttribute('linked_accounts');
    }
    public set linkedAccounts(value: string[]) {
        this._linkedAccounts = value;
    }
    // Temporarily expose input value. Use with caution.
    public get linkedAccountsInput() {
        return this._linkedAccounts;
    }
}
}
