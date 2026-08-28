// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainNameV2Props extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#certificate_arn CcDomainNameV2#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#domain_name CcDomainNameV2#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#endpoint_access_mode CcDomainNameV2#endpoint_access_mode}
    */
    readonly endpointAccessMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#endpoint_configuration CcDomainNameV2#endpoint_configuration}
    */
    readonly endpointConfiguration?: CcDomainNameV2.EndpointConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#policy CcDomainNameV2#policy}
    */
    readonly policy?: string;
    /**
    * The valid routing modes are [BASE_PATH_MAPPING_ONLY], [ROUTING_RULE_THEN_BASE_PATH_MAPPING] and [ROUTING_RULE_ONLY]. All other inputs are invalid.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#routing_mode CcDomainNameV2#routing_mode}
    */
    readonly routingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#security_policy CcDomainNameV2#security_policy}
    */
    readonly securityPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#tags CcDomainNameV2#tags}
    */
    readonly tags?: CcDomainNameV2.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2 awscc_apigateway_domain_name_v2}
*/
export class CcDomainNameV2 extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_domain_name_v2";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomainNameV2 resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomainNameV2 to import
    * @param importFromId The id of the existing CcDomainNameV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomainNameV2 to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_domain_name_v2", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2 awscc_apigateway_domain_name_v2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainNameV2Props = {}
    */
    public constructor(scope: Construct, id: string, config: CcDomainNameV2Props = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_domain_name_v2',
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
        this._certificateArn = config.certificateArn;
        this._domainName = config.domainName;
        this._endpointAccessMode = config.endpointAccessMode;
        this._endpointConfiguration.internalValue = config.endpointConfiguration;
        this._policy = config.policy;
        this._routingMode = config.routingMode;
        this._securityPolicy = config.securityPolicy;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }

    // domain_name - computed: true, optional: true, required: false
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    public resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // domain_name_arn - computed: true, optional: false, required: false
    public get domainNameArn() {
        return this.getStringAttribute('domain_name_arn');
    }

    // domain_name_id - computed: true, optional: false, required: false
    public get domainNameId() {
        return this.getStringAttribute('domain_name_id');
    }

    // endpoint_access_mode - computed: true, optional: true, required: false
    private _endpointAccessMode?: string; 
    public get endpointAccessMode() {
        return this.getStringAttribute('endpoint_access_mode');
    }
    public set endpointAccessMode(value: string) {
        this._endpointAccessMode = value;
    }
    public resetEndpointAccessMode() {
        this._endpointAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointAccessModeInput() {
        return this._endpointAccessMode;
    }

    // endpoint_configuration - computed: true, optional: true, required: false
    private _endpointConfiguration = new CcDomainNameV2.EndpointConfigurationPropertyOutputReference(this, "endpoint_configuration");
    public get endpointConfiguration() {
        return this._endpointConfiguration;
    }
    public putEndpointConfiguration(value: CcDomainNameV2.EndpointConfigurationProperty) {
        this._endpointConfiguration.internalValue = value;
    }
    public resetEndpointConfiguration() {
        this._endpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigurationInput() {
        return this._endpointConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    public resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // routing_mode - computed: true, optional: true, required: false
    private _routingMode?: string; 
    public get routingMode() {
        return this.getStringAttribute('routing_mode');
    }
    public set routingMode(value: string) {
        this._routingMode = value;
    }
    public resetRoutingMode() {
        this._routingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingModeInput() {
        return this._routingMode;
    }

    // security_policy - computed: true, optional: true, required: false
    private _securityPolicy?: string; 
    public get securityPolicy() {
        return this.getStringAttribute('security_policy');
    }
    public set securityPolicy(value: string) {
        this._securityPolicy = value;
    }
    public resetSecurityPolicy() {
        this._securityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityPolicyInput() {
        return this._securityPolicy;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomainNameV2.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomainNameV2.TagProperty[] | cdktn.IResolvable) {
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
            certificate_arn: cdktn.stringToTerraform(this._certificateArn),
            domain_name: cdktn.stringToTerraform(this._domainName),
            endpoint_access_mode: cdktn.stringToTerraform(this._endpointAccessMode),
            endpoint_configuration: ccDomainNameV2EndpointConfigurationPropertyToTerraform(this._endpointConfiguration.internalValue),
            policy: cdktn.stringToTerraform(this._policy),
            routing_mode: cdktn.stringToTerraform(this._routingMode),
            security_policy: cdktn.stringToTerraform(this._securityPolicy),
            tags: cdktn.listMapper(ccDomainNameV2TagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_arn: {
                value: cdktn.stringToHclTerraform(this._certificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_access_mode: {
                value: cdktn.stringToHclTerraform(this._endpointAccessMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_configuration: {
                value: ccDomainNameV2EndpointConfigurationPropertyToHclTerraform(this._endpointConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomainNameV2.EndpointConfigurationProperty",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            routing_mode: {
                value: cdktn.stringToHclTerraform(this._routingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_policy: {
                value: cdktn.stringToHclTerraform(this._securityPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainNameV2TagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDomainNameV2.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainNameV2EndpointConfigurationPropertyToTerraform(struct?: CcDomainNameV2.EndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDomainNameV2EndpointConfigurationPropertyToHclTerraform(struct?: CcDomainNameV2.EndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainNameV2TagPropertyToTerraform(struct?: CcDomainNameV2.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainNameV2TagPropertyToHclTerraform(struct?: CcDomainNameV2.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDomainNameV2 {
export interface EndpointConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#ip_address_type CcDomainNameV2#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#types CcDomainNameV2#types}
    */
    readonly types?: string[];
}
export class EndpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddressType = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddressType = value.ipAddressType;
            this._types = value.types;
        }
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#key CcDomainNameV2#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_domain_name_v2#value CcDomainNameV2#value}
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
