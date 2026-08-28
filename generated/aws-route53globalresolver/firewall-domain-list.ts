// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFirewallDomainListProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#client_token CcFirewallDomainList#client_token}
    */
    readonly clientToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#description CcFirewallDomainList#description}
    */
    readonly description?: string;
    /**
    * S3 URL to import domains from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#domain_file_url CcFirewallDomainList#domain_file_url}
    */
    readonly domainFileUrl?: string;
    /**
    * An inline list of domains to use for this domain list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#domains CcFirewallDomainList#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#global_resolver_id CcFirewallDomainList#global_resolver_id}
    */
    readonly globalResolverId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#name CcFirewallDomainList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#tags CcFirewallDomainList#tags}
    */
    readonly tags?: CcFirewallDomainList.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list awscc_route53globalresolver_firewall_domain_list}
*/
export class CcFirewallDomainList extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53globalresolver_firewall_domain_list";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFirewallDomainList resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFirewallDomainList to import
    * @param importFromId The id of the existing CcFirewallDomainList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFirewallDomainList to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53globalresolver_firewall_domain_list", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list awscc_route53globalresolver_firewall_domain_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFirewallDomainListProps
    */
    public constructor(scope: Construct, id: string, config: CcFirewallDomainListProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53globalresolver_firewall_domain_list',
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
        this._clientToken = config.clientToken;
        this._description = config.description;
        this._domainFileUrl = config.domainFileUrl;
        this._domains = config.domains;
        this._globalResolverId = config.globalResolverId;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // client_token - computed: true, optional: true, required: false
    private _clientToken?: string; 
    public get clientToken() {
        return this.getStringAttribute('client_token');
    }
    public set clientToken(value: string) {
        this._clientToken = value;
    }
    public resetClientToken() {
        this._clientToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientTokenInput() {
        return this._clientToken;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // domain_count - computed: true, optional: false, required: false
    public get domainCount() {
        return this.getNumberAttribute('domain_count');
    }

    // domain_file_url - computed: true, optional: true, required: false
    private _domainFileUrl?: string; 
    public get domainFileUrl() {
        return this.getStringAttribute('domain_file_url');
    }
    public set domainFileUrl(value: string) {
        this._domainFileUrl = value;
    }
    public resetDomainFileUrl() {
        this._domainFileUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainFileUrlInput() {
        return this._domainFileUrl;
    }

    // domains - computed: true, optional: true, required: false
    private _domains?: string[]; 
    public get domains() {
        return cdktn.Fn.tolist(this.getListAttribute('domains'));
    }
    public set domains(value: string[]) {
        this._domains = value;
    }
    public resetDomains() {
        this._domains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainsInput() {
        return this._domains;
    }

    // firewall_domain_list_id - computed: true, optional: false, required: false
    public get firewallDomainListId() {
        return this.getStringAttribute('firewall_domain_list_id');
    }

    // global_resolver_id - computed: false, optional: false, required: true
    private _globalResolverId?: string; 
    public get globalResolverId() {
        return this.getStringAttribute('global_resolver_id');
    }
    public set globalResolverId(value: string) {
        this._globalResolverId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get globalResolverIdInput() {
        return this._globalResolverId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFirewallDomainList.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFirewallDomainList.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            client_token: cdktn.stringToTerraform(this._clientToken),
            description: cdktn.stringToTerraform(this._description),
            domain_file_url: cdktn.stringToTerraform(this._domainFileUrl),
            domains: cdktn.listMapper(cdktn.stringToTerraform, false)(this._domains),
            global_resolver_id: cdktn.stringToTerraform(this._globalResolverId),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccFirewallDomainListTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_token: {
                value: cdktn.stringToHclTerraform(this._clientToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_file_url: {
                value: cdktn.stringToHclTerraform(this._domainFileUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domains: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._domains),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            global_resolver_id: {
                value: cdktn.stringToHclTerraform(this._globalResolverId),
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
            tags: {
                value: cdktn.listMapperHcl(ccFirewallDomainListTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFirewallDomainList.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFirewallDomainListTagPropertyToTerraform(struct?: CcFirewallDomainList.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFirewallDomainListTagPropertyToHclTerraform(struct?: CcFirewallDomainList.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFirewallDomainList {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#key CcFirewallDomainList#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_firewall_domain_list#value CcFirewallDomainList#value}
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
