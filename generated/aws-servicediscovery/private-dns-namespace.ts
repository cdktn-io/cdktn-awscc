// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPrivateDnsNamespaceProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#description CcPrivateDnsNamespace#description}
    */
    readonly description?: string;
    /**
    * The name that you want to assign to this namespace. When you create a private DNS namespace, AWS Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#name CcPrivateDnsNamespace#name}
    */
    readonly name: string;
    /**
    * Properties of the private DNS namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#properties CcPrivateDnsNamespace#properties}
    */
    readonly properties?: CcPrivateDnsNamespace.PropertiesProperty;
    /**
    * The tags for the namespace. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#tags CcPrivateDnsNamespace#tags}
    */
    readonly tags?: CcPrivateDnsNamespace.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the Amazon VPC that you want to associate the namespace with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#vpc CcPrivateDnsNamespace#vpc}
    */
    readonly vpc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace awscc_servicediscovery_private_dns_namespace}
*/
export class CcPrivateDnsNamespace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicediscovery_private_dns_namespace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPrivateDnsNamespace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPrivateDnsNamespace to import
    * @param importFromId The id of the existing CcPrivateDnsNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPrivateDnsNamespace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicediscovery_private_dns_namespace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace awscc_servicediscovery_private_dns_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPrivateDnsNamespaceProps
    */
    public constructor(scope: Construct, id: string, config: CcPrivateDnsNamespaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicediscovery_private_dns_namespace',
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
        this._name = config.name;
        this._properties.internalValue = config.properties;
        this._tags.internalValue = config.tags;
        this._vpc = config.vpc;
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

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
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

    // private_dns_namespace_id - computed: true, optional: false, required: false
    public get privateDnsNamespaceId() {
        return this.getStringAttribute('private_dns_namespace_id');
    }

    // properties - computed: true, optional: true, required: false
    private _properties = new CcPrivateDnsNamespace.PropertiesPropertyOutputReference(this, "properties");
    public get properties() {
        return this._properties;
    }
    public putProperties(value: CcPrivateDnsNamespace.PropertiesProperty) {
        this._properties.internalValue = value;
    }
    public resetProperties() {
        this._properties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
        return this._properties.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPrivateDnsNamespace.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPrivateDnsNamespace.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc - computed: true, optional: true, required: false
    private _vpc?: string; 
    public get vpc() {
        return this.getStringAttribute('vpc');
    }
    public set vpc(value: string) {
        this._vpc = value;
    }
    public resetVpc() {
        this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
        return this._vpc;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            properties: ccPrivateDnsNamespacePropertiesPropertyToTerraform(this._properties.internalValue),
            tags: cdktn.listMapper(ccPrivateDnsNamespaceTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc: cdktn.stringToTerraform(this._vpc),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            properties: {
                value: ccPrivateDnsNamespacePropertiesPropertyToHclTerraform(this._properties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPrivateDnsNamespace.PropertiesProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPrivateDnsNamespaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPrivateDnsNamespace.TagPropertyList",
            },
            vpc: {
                value: cdktn.stringToHclTerraform(this._vpc),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPrivateDnsNamespaceSOAPropertyToTerraform(struct?: CcPrivateDnsNamespace.SOAProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ttl: cdktn.numberToTerraform(struct!.ttl),
    }
}


export function ccPrivateDnsNamespaceSOAPropertyToHclTerraform(struct?: CcPrivateDnsNamespace.SOAProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ttl: {
            value: cdktn.numberToHclTerraform(struct!.ttl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrivateDnsNamespacePrivateDnsPropertiesMutablePropertyToTerraform(struct?: CcPrivateDnsNamespace.PrivateDnsPropertiesMutableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        soa: ccPrivateDnsNamespaceSOAPropertyToTerraform(struct!.soa),
    }
}


export function ccPrivateDnsNamespacePrivateDnsPropertiesMutablePropertyToHclTerraform(struct?: CcPrivateDnsNamespace.PrivateDnsPropertiesMutableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        soa: {
            value: ccPrivateDnsNamespaceSOAPropertyToHclTerraform(struct!.soa),
            isBlock: true,
            type: "struct",
            storageClassType: "SOAProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrivateDnsNamespacePropertiesPropertyToTerraform(struct?: CcPrivateDnsNamespace.PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_properties: ccPrivateDnsNamespacePrivateDnsPropertiesMutablePropertyToTerraform(struct!.dnsProperties),
    }
}


export function ccPrivateDnsNamespacePropertiesPropertyToHclTerraform(struct?: CcPrivateDnsNamespace.PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_properties: {
            value: ccPrivateDnsNamespacePrivateDnsPropertiesMutablePropertyToHclTerraform(struct!.dnsProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateDnsPropertiesMutableProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrivateDnsNamespaceTagPropertyToTerraform(struct?: CcPrivateDnsNamespace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPrivateDnsNamespaceTagPropertyToHclTerraform(struct?: CcPrivateDnsNamespace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPrivateDnsNamespace {
export interface SOAProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#ttl CcPrivateDnsNamespace#ttl}
    */
    readonly ttl?: number;
}
export class SOAPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SOAProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ttl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SOAProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ttl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ttl = value.ttl;
        }
    }

    // ttl - computed: true, optional: true, required: false
    private _ttl?: number; 
    public get ttl() {
        return this.getNumberAttribute('ttl');
    }
    public set ttl(value: number) {
        this._ttl = value;
    }
    public resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
        return this._ttl;
    }
}
export interface PrivateDnsPropertiesMutableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#soa CcPrivateDnsNamespace#soa}
    */
    readonly soa?: SOAProperty;
}
export class PrivateDnsPropertiesMutablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateDnsPropertiesMutableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._soa?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.soa = this._soa?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateDnsPropertiesMutableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._soa.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._soa.internalValue = value.soa;
        }
    }

    // soa - computed: true, optional: true, required: false
    private _soa = new SOAPropertyOutputReference(this, "soa");
    public get soa() {
        return this._soa;
    }
    public putSoa(value: SOAProperty) {
        this._soa.internalValue = value;
    }
    public resetSoa() {
        this._soa.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get soaInput() {
        return this._soa.internalValue;
    }
}
export interface PropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#dns_properties CcPrivateDnsNamespace#dns_properties}
    */
    readonly dnsProperties?: PrivateDnsPropertiesMutableProperty;
}
export class PropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsProperties = this._dnsProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsProperties.internalValue = value.dnsProperties;
        }
    }

    // dns_properties - computed: true, optional: true, required: false
    private _dnsProperties = new PrivateDnsPropertiesMutablePropertyOutputReference(this, "dns_properties");
    public get dnsProperties() {
        return this._dnsProperties;
    }
    public putDnsProperties(value: PrivateDnsPropertiesMutableProperty) {
        this._dnsProperties.internalValue = value;
    }
    public resetDnsProperties() {
        this._dnsProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsPropertiesInput() {
        return this._dnsProperties.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#key CcPrivateDnsNamespace#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_private_dns_namespace#value CcPrivateDnsNamespace#value}
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
