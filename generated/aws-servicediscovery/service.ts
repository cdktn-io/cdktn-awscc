// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceProps extends cdktn.TerraformMetaArguments {
    /**
    * A description for the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#description CcService#description}
    */
    readonly description?: string;
    /**
    * DNS-related configurations for the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#dns_config CcService#dns_config}
    */
    readonly dnsConfig?: CcService.DnsConfigProperty;
    /**
    * Settings for health checks. Used when routing is DNS-based.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#health_check_config CcService#health_check_config}
    */
    readonly healthCheckConfig?: CcService.HealthCheckConfigProperty;
    /**
    * Settings for custom health checks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#health_check_custom_config CcService#health_check_custom_config}
    */
    readonly healthCheckCustomConfig?: CcService.HealthCheckCustomConfigProperty;
    /**
    * The name of the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#name CcService#name}
    */
    readonly name?: string;
    /**
    * The ID of the namespace in which the service is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#namespace_id CcService#namespace_id}
    */
    readonly namespaceId?: string;
    /**
    * A string map that contains attributes and values for the service. You can specify a maximum of 30 key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#service_attributes CcService#service_attributes}
    */
    readonly serviceAttributes?: { [key: string]: string };
    /**
    * An array of key-value pairs to associate with the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#tags CcService#tags}
    */
    readonly tags?: CcService.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of service. Supported values are HTTP or DNS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#type CcService#type}
    */
    readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service awscc_servicediscovery_service}
*/
export class CcService extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicediscovery_service";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcService resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcService to import
    * @param importFromId The id of the existing CcService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcService to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicediscovery_service", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service awscc_servicediscovery_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServiceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicediscovery_service',
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
        this._dnsConfig.internalValue = config.dnsConfig;
        this._healthCheckConfig.internalValue = config.healthCheckConfig;
        this._healthCheckCustomConfig.internalValue = config.healthCheckCustomConfig;
        this._name = config.name;
        this._namespaceId = config.namespaceId;
        this._serviceAttributes = config.serviceAttributes;
        this._tags.internalValue = config.tags;
        this._type = config.type;
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

    // dns_config - computed: true, optional: true, required: false
    private _dnsConfig = new CcService.DnsConfigPropertyOutputReference(this, "dns_config");
    public get dnsConfig() {
        return this._dnsConfig;
    }
    public putDnsConfig(value: CcService.DnsConfigProperty) {
        this._dnsConfig.internalValue = value;
    }
    public resetDnsConfig() {
        this._dnsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsConfigInput() {
        return this._dnsConfig.internalValue;
    }

    // health_check_config - computed: true, optional: true, required: false
    private _healthCheckConfig = new CcService.HealthCheckConfigPropertyOutputReference(this, "health_check_config");
    public get healthCheckConfig() {
        return this._healthCheckConfig;
    }
    public putHealthCheckConfig(value: CcService.HealthCheckConfigProperty) {
        this._healthCheckConfig.internalValue = value;
    }
    public resetHealthCheckConfig() {
        this._healthCheckConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckConfigInput() {
        return this._healthCheckConfig.internalValue;
    }

    // health_check_custom_config - computed: true, optional: true, required: false
    private _healthCheckCustomConfig = new CcService.HealthCheckCustomConfigPropertyOutputReference(this, "health_check_custom_config");
    public get healthCheckCustomConfig() {
        return this._healthCheckCustomConfig;
    }
    public putHealthCheckCustomConfig(value: CcService.HealthCheckCustomConfigProperty) {
        this._healthCheckCustomConfig.internalValue = value;
    }
    public resetHealthCheckCustomConfig() {
        this._healthCheckCustomConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckCustomConfigInput() {
        return this._healthCheckCustomConfig.internalValue;
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

    // namespace_id - computed: true, optional: true, required: false
    private _namespaceId?: string; 
    public get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    public set namespaceId(value: string) {
        this._namespaceId = value;
    }
    public resetNamespaceId() {
        this._namespaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceIdInput() {
        return this._namespaceId;
    }

    // service_attributes - computed: true, optional: true, required: false
    private _serviceAttributes?: { [key: string]: string }; 
    public get serviceAttributes() {
        return this.getStringMapAttribute('service_attributes');
    }
    public set serviceAttributes(value: { [key: string]: string }) {
        this._serviceAttributes = value;
    }
    public resetServiceAttributes() {
        this._serviceAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAttributesInput() {
        return this._serviceAttributes;
    }

    // service_id - computed: true, optional: false, required: false
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcService.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcService.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            dns_config: ccServiceDnsConfigPropertyToTerraform(this._dnsConfig.internalValue),
            health_check_config: ccServiceHealthCheckConfigPropertyToTerraform(this._healthCheckConfig.internalValue),
            health_check_custom_config: ccServiceHealthCheckCustomConfigPropertyToTerraform(this._healthCheckCustomConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            namespace_id: cdktn.stringToTerraform(this._namespaceId),
            service_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(this._serviceAttributes),
            tags: cdktn.listMapper(ccServiceTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
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
            dns_config: {
                value: ccServiceDnsConfigPropertyToHclTerraform(this._dnsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.DnsConfigProperty",
            },
            health_check_config: {
                value: ccServiceHealthCheckConfigPropertyToHclTerraform(this._healthCheckConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.HealthCheckConfigProperty",
            },
            health_check_custom_config: {
                value: ccServiceHealthCheckCustomConfigPropertyToHclTerraform(this._healthCheckCustomConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.HealthCheckCustomConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            namespace_id: {
                value: cdktn.stringToHclTerraform(this._namespaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_attributes: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._serviceAttributes),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceDnsRecordPropertyToTerraform(struct?: CcService.DnsRecordProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ttl: cdktn.numberToTerraform(struct!.ttl),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccServiceDnsRecordPropertyToHclTerraform(struct?: CcService.DnsRecordProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceDnsConfigPropertyToTerraform(struct?: CcService.DnsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_records: cdktn.listMapper(ccServiceDnsRecordPropertyToTerraform, false)(struct!.dnsRecords),
        namespace_id: cdktn.stringToTerraform(struct!.namespaceId),
        routing_policy: cdktn.stringToTerraform(struct!.routingPolicy),
    }
}


export function ccServiceDnsConfigPropertyToHclTerraform(struct?: CcService.DnsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_records: {
            value: cdktn.listMapperHcl(ccServiceDnsRecordPropertyToHclTerraform, false)(struct!.dnsRecords),
            isBlock: true,
            type: "list",
            storageClassType: "DnsRecordPropertyList",
        },
        namespace_id: {
            value: cdktn.stringToHclTerraform(struct!.namespaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        routing_policy: {
            value: cdktn.stringToHclTerraform(struct!.routingPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceHealthCheckConfigPropertyToTerraform(struct?: CcService.HealthCheckConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failure_threshold: cdktn.numberToTerraform(struct!.failureThreshold),
        resource_path: cdktn.stringToTerraform(struct!.resourcePath),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccServiceHealthCheckConfigPropertyToHclTerraform(struct?: CcService.HealthCheckConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failure_threshold: {
            value: cdktn.numberToHclTerraform(struct!.failureThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_path: {
            value: cdktn.stringToHclTerraform(struct!.resourcePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceHealthCheckCustomConfigPropertyToTerraform(struct?: CcService.HealthCheckCustomConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failure_threshold: cdktn.numberToTerraform(struct!.failureThreshold),
    }
}


export function ccServiceHealthCheckCustomConfigPropertyToHclTerraform(struct?: CcService.HealthCheckCustomConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failure_threshold: {
            value: cdktn.numberToHclTerraform(struct!.failureThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceTagPropertyToTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceTagPropertyToHclTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
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


export namespace CcService {
export interface DnsRecordProperty {
    /**
    * The time-to-live (TTL) for the DNS record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#ttl CcService#ttl}
    */
    readonly ttl?: number;
    /**
    * The DNS record type (e.g., A, AAAA, SRV).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#type CcService#type}
    */
    readonly type?: string;
}
export class DnsRecordPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DnsRecordProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ttl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DnsRecordProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ttl = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ttl = value.ttl;
            this._type = value.type;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class DnsRecordPropertyList extends cdktn.ComplexList {
    public internalValue? : DnsRecordProperty[] | cdktn.IResolvable

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
    public get(index: number): DnsRecordPropertyOutputReference {
        return new DnsRecordPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DnsConfigProperty {
    /**
    * A list of DNS records associated with the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#dns_records CcService#dns_records}
    */
    readonly dnsRecords?: DnsRecordProperty[] | cdktn.IResolvable;
    /**
    * The ID of the namespace for the DNS configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#namespace_id CcService#namespace_id}
    */
    readonly namespaceId?: string;
    /**
    * The routing policy to use for DNS queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#routing_policy CcService#routing_policy}
    */
    readonly routingPolicy?: string;
}
export class DnsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DnsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsRecords?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsRecords = this._dnsRecords?.internalValue;
        }
        if (this._namespaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceId = this._namespaceId;
        }
        if (this._routingPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingPolicy = this._routingPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DnsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsRecords.internalValue = undefined;
            this._namespaceId = undefined;
            this._routingPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsRecords.internalValue = value.dnsRecords;
            this._namespaceId = value.namespaceId;
            this._routingPolicy = value.routingPolicy;
        }
    }

    // dns_records - computed: true, optional: true, required: false
    private _dnsRecords = new DnsRecordPropertyList(this, "dns_records", false);
    public get dnsRecords() {
        return this._dnsRecords;
    }
    public putDnsRecords(value: DnsRecordProperty[] | cdktn.IResolvable) {
        this._dnsRecords.internalValue = value;
    }
    public resetDnsRecords() {
        this._dnsRecords.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsRecordsInput() {
        return this._dnsRecords.internalValue;
    }

    // namespace_id - computed: true, optional: true, required: false
    private _namespaceId?: string; 
    public get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    public set namespaceId(value: string) {
        this._namespaceId = value;
    }
    public resetNamespaceId() {
        this._namespaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceIdInput() {
        return this._namespaceId;
    }

    // routing_policy - computed: true, optional: true, required: false
    private _routingPolicy?: string; 
    public get routingPolicy() {
        return this.getStringAttribute('routing_policy');
    }
    public set routingPolicy(value: string) {
        this._routingPolicy = value;
    }
    public resetRoutingPolicy() {
        this._routingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingPolicyInput() {
        return this._routingPolicy;
    }
}
export interface HealthCheckConfigProperty {
    /**
    * The number of consecutive health check failures that must occur before declaring the service unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#failure_threshold CcService#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * The path to ping on the service for health checks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#resource_path CcService#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * The type of health check (e.g., HTTP, HTTPS, TCP).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#type CcService#type}
    */
    readonly type?: string;
}
export class HealthCheckConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthCheckConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failureThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureThreshold = this._failureThreshold;
        }
        if (this._resourcePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourcePath = this._resourcePath;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failureThreshold = undefined;
            this._resourcePath = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failureThreshold = value.failureThreshold;
            this._resourcePath = value.resourcePath;
            this._type = value.type;
        }
    }

    // failure_threshold - computed: true, optional: true, required: false
    private _failureThreshold?: number; 
    public get failureThreshold() {
        return this.getNumberAttribute('failure_threshold');
    }
    public set failureThreshold(value: number) {
        this._failureThreshold = value;
    }
    public resetFailureThreshold() {
        this._failureThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureThresholdInput() {
        return this._failureThreshold;
    }

    // resource_path - computed: true, optional: true, required: false
    private _resourcePath?: string; 
    public get resourcePath() {
        return this.getStringAttribute('resource_path');
    }
    public set resourcePath(value: string) {
        this._resourcePath = value;
    }
    public resetResourcePath() {
        this._resourcePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePathInput() {
        return this._resourcePath;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface HealthCheckCustomConfigProperty {
    /**
    * The number of consecutive health check failures required before the service is considered unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#failure_threshold CcService#failure_threshold}
    */
    readonly failureThreshold?: number;
}
export class HealthCheckCustomConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthCheckCustomConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failureThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureThreshold = this._failureThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckCustomConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failureThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failureThreshold = value.failureThreshold;
        }
    }

    // failure_threshold - computed: true, optional: true, required: false
    private _failureThreshold?: number; 
    public get failureThreshold() {
        return this.getNumberAttribute('failure_threshold');
    }
    public set failureThreshold(value: number) {
        this._failureThreshold = value;
    }
    public resetFailureThreshold() {
        this._failureThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureThresholdInput() {
        return this._failureThreshold;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#key CcService#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicediscovery_service#value CcService#value}
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
