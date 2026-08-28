// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResolverRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The name server domain for queries to be delegated to if a query matches the delegation record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#delegation_record CcResolverRule#delegation_record}
    */
    readonly delegationRecord?: string;
    /**
    * DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#domain_name CcResolverRule#domain_name}
    */
    readonly domainName?: string;
    /**
    * The name for the Resolver rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#name CcResolverRule#name}
    */
    readonly name?: string;
    /**
    * The ID of the endpoint that the rule is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#resolver_endpoint_id CcResolverRule#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#rule_type CcResolverRule#rule_type}
    */
    readonly ruleType: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#tags CcResolverRule#tags}
    */
    readonly tags?: CcResolverRule.TagProperty[] | cdktn.IResolvable;
    /**
    * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#target_ips CcResolverRule#target_ips}
    */
    readonly targetIps?: CcResolverRule.TargetAddressProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule awscc_route53resolver_resolver_rule}
*/
export class CcResolverRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53resolver_resolver_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResolverRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResolverRule to import
    * @param importFromId The id of the existing CcResolverRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResolverRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_resolver_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule awscc_route53resolver_resolver_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResolverRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcResolverRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53resolver_resolver_rule',
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
        this._delegationRecord = config.delegationRecord;
        this._domainName = config.domainName;
        this._name = config.name;
        this._resolverEndpointId = config.resolverEndpointId;
        this._ruleType = config.ruleType;
        this._tags.internalValue = config.tags;
        this._targetIps.internalValue = config.targetIps;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // delegation_record - computed: true, optional: true, required: false
    private _delegationRecord?: string; 
    public get delegationRecord() {
        return this.getStringAttribute('delegation_record');
    }
    public set delegationRecord(value: string) {
        this._delegationRecord = value;
    }
    public resetDelegationRecord() {
        this._delegationRecord = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delegationRecordInput() {
        return this._delegationRecord;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // resolver_endpoint_id - computed: true, optional: true, required: false
    private _resolverEndpointId?: string; 
    public get resolverEndpointId() {
        return this.getStringAttribute('resolver_endpoint_id');
    }
    public set resolverEndpointId(value: string) {
        this._resolverEndpointId = value;
    }
    public resetResolverEndpointId() {
        this._resolverEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverEndpointIdInput() {
        return this._resolverEndpointId;
    }

    // resolver_rule_id - computed: true, optional: false, required: false
    public get resolverRuleId() {
        return this.getStringAttribute('resolver_rule_id');
    }

    // rule_type - computed: false, optional: false, required: true
    private _ruleType?: string; 
    public get ruleType() {
        return this.getStringAttribute('rule_type');
    }
    public set ruleType(value: string) {
        this._ruleType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeInput() {
        return this._ruleType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcResolverRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcResolverRule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_ips - computed: true, optional: true, required: false
    private _targetIps = new CcResolverRule.TargetAddressPropertyList(this, "target_ips", false);
    public get targetIps() {
        return this._targetIps;
    }
    public putTargetIps(value: CcResolverRule.TargetAddressProperty[] | cdktn.IResolvable) {
        this._targetIps.internalValue = value;
    }
    public resetTargetIps() {
        this._targetIps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIpsInput() {
        return this._targetIps.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            delegation_record: cdktn.stringToTerraform(this._delegationRecord),
            domain_name: cdktn.stringToTerraform(this._domainName),
            name: cdktn.stringToTerraform(this._name),
            resolver_endpoint_id: cdktn.stringToTerraform(this._resolverEndpointId),
            rule_type: cdktn.stringToTerraform(this._ruleType),
            tags: cdktn.listMapper(ccResolverRuleTagPropertyToTerraform, false)(this._tags.internalValue),
            target_ips: cdktn.listMapper(ccResolverRuleTargetAddressPropertyToTerraform, false)(this._targetIps.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            delegation_record: {
                value: cdktn.stringToHclTerraform(this._delegationRecord),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resolver_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._resolverEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_type: {
                value: cdktn.stringToHclTerraform(this._ruleType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccResolverRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcResolverRule.TagPropertyList",
            },
            target_ips: {
                value: cdktn.listMapperHcl(ccResolverRuleTargetAddressPropertyToHclTerraform, false)(this._targetIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcResolverRule.TargetAddressPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResolverRuleTagPropertyToTerraform(struct?: CcResolverRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResolverRuleTagPropertyToHclTerraform(struct?: CcResolverRule.TagProperty | cdktn.IResolvable): any {
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


export function ccResolverRuleTargetAddressPropertyToTerraform(struct?: CcResolverRule.TargetAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip: cdktn.stringToTerraform(struct!.ip),
        ipv_6: cdktn.stringToTerraform(struct!.ipv6),
        port: cdktn.stringToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        server_name_indication: cdktn.stringToTerraform(struct!.serverNameIndication),
    }
}


export function ccResolverRuleTargetAddressPropertyToHclTerraform(struct?: CcResolverRule.TargetAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip: {
            value: cdktn.stringToHclTerraform(struct!.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv_6: {
            value: cdktn.stringToHclTerraform(struct!.ipv6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.stringToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_name_indication: {
            value: cdktn.stringToHclTerraform(struct!.serverNameIndication),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcResolverRule {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#key CcResolverRule#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#value CcResolverRule#value}
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
export interface TargetAddressProperty {
    /**
    * One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#ip CcResolverRule#ip}
    */
    readonly ip?: string;
    /**
    * One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#ipv_6 CcResolverRule#ipv_6}
    */
    readonly ipv6?: string;
    /**
    * The port at Ip that you want to forward DNS queries to. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#port CcResolverRule#port}
    */
    readonly port?: string;
    /**
    * The protocol that you want to use to forward DNS queries. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#protocol CcResolverRule#protocol}
    */
    readonly protocol?: string;
    /**
    * The SNI of the target name servers for DoH/DoH-FIPS outbound endpoints
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule#server_name_indication CcResolverRule#server_name_indication}
    */
    readonly serverNameIndication?: string;
}
export class TargetAddressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._ipv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6 = this._ipv6;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._serverNameIndication !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverNameIndication = this._serverNameIndication;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
            this._ipv6 = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._serverNameIndication = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
            this._ipv6 = value.ipv6;
            this._port = value.port;
            this._protocol = value.protocol;
            this._serverNameIndication = value.serverNameIndication;
        }
    }

    // ip - computed: true, optional: true, required: false
    private _ip?: string; 
    public get ip() {
        return this.getStringAttribute('ip');
    }
    public set ip(value: string) {
        this._ip = value;
    }
    public resetIp() {
        this._ip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipInput() {
        return this._ip;
    }

    // ipv_6 - computed: true, optional: true, required: false
    private _ipv6?: string; 
    public get ipv6() {
        return this.getStringAttribute('ipv_6');
    }
    public set ipv6(value: string) {
        this._ipv6 = value;
    }
    public resetIpv6() {
        this._ipv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6Input() {
        return this._ipv6;
    }

    // port - computed: true, optional: true, required: false
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // server_name_indication - computed: true, optional: true, required: false
    private _serverNameIndication?: string; 
    public get serverNameIndication() {
        return this.getStringAttribute('server_name_indication');
    }
    public set serverNameIndication(value: string) {
        this._serverNameIndication = value;
    }
    public resetServerNameIndication() {
        this._serverNameIndication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameIndicationInput() {
        return this._serverNameIndication;
    }
}

export class TargetAddressPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetAddressProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetAddressPropertyOutputReference {
        return new TargetAddressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
