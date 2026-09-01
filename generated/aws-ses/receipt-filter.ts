// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReceiptFilterProps extends cdktn.TerraformMetaArguments {
    /**
    * A structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#filter CcReceiptFilter#filter}
    */
    readonly filter: CcReceiptFilter.FilterProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter awscc_ses_receipt_filter}
*/
export class CcReceiptFilter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_receipt_filter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReceiptFilter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReceiptFilter to import
    * @param importFromId The id of the existing CcReceiptFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReceiptFilter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_receipt_filter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter awscc_ses_receipt_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReceiptFilterProps
    */
    public constructor(scope: Construct, id: string, config: CcReceiptFilterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_receipt_filter',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._filter.internalValue = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // filter - computed: false, optional: false, required: true
    private _filter = new CcReceiptFilter.FilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: CcReceiptFilter.FilterProperty) {
        this._filter.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // receipt_filter_id - computed: true, optional: false, required: false
    public get receiptFilterId() {
        return this.getStringAttribute('receipt_filter_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            filter: ccReceiptFilterFilterPropertyToTerraform(this._filter.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            filter: {
                value: ccReceiptFilterFilterPropertyToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReceiptFilter.FilterProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReceiptFilterIpFilterPropertyToTerraform(struct?: CcReceiptFilter.IpFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
        policy: cdktn.stringToTerraform(struct!.policy),
    }
}


export function ccReceiptFilterIpFilterPropertyToHclTerraform(struct?: CcReceiptFilter.IpFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy: {
            value: cdktn.stringToHclTerraform(struct!.policy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReceiptFilterFilterPropertyToTerraform(struct?: CcReceiptFilter.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_filter: ccReceiptFilterIpFilterPropertyToTerraform(struct!.ipFilter),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccReceiptFilterFilterPropertyToHclTerraform(struct?: CcReceiptFilter.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_filter: {
            value: ccReceiptFilterIpFilterPropertyToHclTerraform(struct!.ipFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "IpFilterProperty",
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


export namespace CcReceiptFilter {
export interface IpFilterProperty {
    /**
    * A single IP address or a range of IP addresses to block or allow, specified in CIDR notation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#cidr CcReceiptFilter#cidr}
    */
    readonly cidr: string;
    /**
    * Indicates whether to block or allow incoming mail from the specified IP addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#policy CcReceiptFilter#policy}
    */
    readonly policy: string;
}
export class IpFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IpFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        if (this._policy !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
            this._policy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
            this._policy = value.policy;
        }
    }

    // cidr - computed: false, optional: false, required: true
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }
}
export interface FilterProperty {
    /**
    * A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#ip_filter CcReceiptFilter#ip_filter}
    */
    readonly ipFilter: IpFilterProperty;
    /**
    * The name of the IP address filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_receipt_filter#name CcReceiptFilter#name}
    */
    readonly name?: string;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipFilter = this._ipFilter?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipFilter.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipFilter.internalValue = value.ipFilter;
            this._name = value.name;
        }
    }

    // ip_filter - computed: false, optional: false, required: true
    private _ipFilter = new IpFilterPropertyOutputReference(this, "ip_filter");
    public get ipFilter() {
        return this._ipFilter;
    }
    public putIpFilter(value: IpFilterProperty) {
        this._ipFilter.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipFilterInput() {
        return this._ipFilter.internalValue;
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
}
