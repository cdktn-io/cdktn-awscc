// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRecordSetProps extends cdktn.TerraformMetaArguments {
    /**
    * Alias resource record sets only: Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#alias_target CcRecordSet#alias_target}
    */
    readonly aliasTarget?: CcRecordSet.AliasTargetProperty;
    /**
    * The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#cidr_routing_config CcRecordSet#cidr_routing_config}
    */
    readonly cidrRoutingConfig?: CcRecordSet.CidrRoutingConfigProperty;
    /**
    * Optional: Any comments you want to include about a change batch request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#comment CcRecordSet#comment}
    */
    readonly comment?: string;
    /**
    * To configure failover, you add the Failover element to two resource record sets. For one resource record set, you specify PRIMARY as the value for Failover; for the other resource record set, you specify SECONDARY. In addition, you include the HealthCheckId element and specify the health check that you want Amazon Route 53 to perform for each resource record set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#failover CcRecordSet#failover}
    */
    readonly failover?: string;
    /**
    * A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#geo_location CcRecordSet#geo_location}
    */
    readonly geoLocation?: CcRecordSet.GeoLocationProperty;
    /**
    * If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the HealthCheckId element and specify the ID of the applicable health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#health_check_id CcRecordSet#health_check_id}
    */
    readonly healthCheckId?: string;
    /**
    * The ID of the hosted zone that you want to create records in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_id CcRecordSet#hosted_zone_id}
    */
    readonly hostedZoneId?: string;
    /**
    * The name of the hosted zone that you want to create records in. You must include a trailing dot (for example, www.example.com.) as part of the HostedZoneName.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_name CcRecordSet#hosted_zone_name}
    */
    readonly hostedZoneName?: string;
    /**
    * To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#multi_value_answer CcRecordSet#multi_value_answer}
    */
    readonly multiValueAnswer?: boolean | cdktn.IResolvable;
    /**
    * The name of the record that you want to create, update, or delete.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#name CcRecordSet#name}
    */
    readonly name: string;
    /**
    * The Amazon EC2 Region where you created the resource that this resource record set refers to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#region CcRecordSet#region}
    */
    readonly region?: string;
    /**
    * One or more values that correspond with the value that you specified for the Type property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#resource_records CcRecordSet#resource_records}
    */
    readonly resourceRecords?: string[];
    /**
    * An identifier that differentiates among multiple resource record sets that have the same combination of name and type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#set_identifier CcRecordSet#set_identifier}
    */
    readonly setIdentifier?: string;
    /**
    * The resource record cache time to live (TTL), in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#ttl CcRecordSet#ttl}
    */
    readonly ttl?: string;
    /**
    * The DNS record type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#type CcRecordSet#type}
    */
    readonly type: string;
    /**
    * Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource's weight to the total.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#weight CcRecordSet#weight}
    */
    readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set awscc_route53_record_set}
*/
export class CcRecordSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53_record_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRecordSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRecordSet to import
    * @param importFromId The id of the existing CcRecordSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRecordSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_record_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set awscc_route53_record_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRecordSetProps
    */
    public constructor(scope: Construct, id: string, config: CcRecordSetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53_record_set',
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
        this._aliasTarget.internalValue = config.aliasTarget;
        this._cidrRoutingConfig.internalValue = config.cidrRoutingConfig;
        this._comment = config.comment;
        this._failover = config.failover;
        this._geoLocation.internalValue = config.geoLocation;
        this._healthCheckId = config.healthCheckId;
        this._hostedZoneId = config.hostedZoneId;
        this._hostedZoneName = config.hostedZoneName;
        this._multiValueAnswer = config.multiValueAnswer;
        this._name = config.name;
        this._region = config.region;
        this._resourceRecords = config.resourceRecords;
        this._setIdentifier = config.setIdentifier;
        this._ttl = config.ttl;
        this._type = config.type;
        this._weight = config.weight;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias_target - computed: true, optional: true, required: false
    private _aliasTarget = new CcRecordSet.AliasTargetPropertyOutputReference(this, "alias_target");
    public get aliasTarget() {
        return this._aliasTarget;
    }
    public putAliasTarget(value: CcRecordSet.AliasTargetProperty) {
        this._aliasTarget.internalValue = value;
    }
    public resetAliasTarget() {
        this._aliasTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasTargetInput() {
        return this._aliasTarget.internalValue;
    }

    // cidr_routing_config - computed: true, optional: true, required: false
    private _cidrRoutingConfig = new CcRecordSet.CidrRoutingConfigPropertyOutputReference(this, "cidr_routing_config");
    public get cidrRoutingConfig() {
        return this._cidrRoutingConfig;
    }
    public putCidrRoutingConfig(value: CcRecordSet.CidrRoutingConfigProperty) {
        this._cidrRoutingConfig.internalValue = value;
    }
    public resetCidrRoutingConfig() {
        this._cidrRoutingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrRoutingConfigInput() {
        return this._cidrRoutingConfig.internalValue;
    }

    // comment - computed: true, optional: true, required: false
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }

    // failover - computed: true, optional: true, required: false
    private _failover?: string; 
    public get failover() {
        return this.getStringAttribute('failover');
    }
    public set failover(value: string) {
        this._failover = value;
    }
    public resetFailover() {
        this._failover = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failoverInput() {
        return this._failover;
    }

    // geo_location - computed: true, optional: true, required: false
    private _geoLocation = new CcRecordSet.GeoLocationPropertyOutputReference(this, "geo_location");
    public get geoLocation() {
        return this._geoLocation;
    }
    public putGeoLocation(value: CcRecordSet.GeoLocationProperty) {
        this._geoLocation.internalValue = value;
    }
    public resetGeoLocation() {
        this._geoLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get geoLocationInput() {
        return this._geoLocation.internalValue;
    }

    // health_check_id - computed: true, optional: true, required: false
    private _healthCheckId?: string; 
    public get healthCheckId() {
        return this.getStringAttribute('health_check_id');
    }
    public set healthCheckId(value: string) {
        this._healthCheckId = value;
    }
    public resetHealthCheckId() {
        this._healthCheckId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckIdInput() {
        return this._healthCheckId;
    }

    // hosted_zone_id - computed: true, optional: true, required: false
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
        this._hostedZoneId = value;
    }
    public resetHostedZoneId() {
        this._hostedZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
        return this._hostedZoneId;
    }

    // hosted_zone_name - computed: true, optional: true, required: false
    private _hostedZoneName?: string; 
    public get hostedZoneName() {
        return this.getStringAttribute('hosted_zone_name');
    }
    public set hostedZoneName(value: string) {
        this._hostedZoneName = value;
    }
    public resetHostedZoneName() {
        this._hostedZoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneNameInput() {
        return this._hostedZoneName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // multi_value_answer - computed: true, optional: true, required: false
    private _multiValueAnswer?: boolean | cdktn.IResolvable; 
    public get multiValueAnswer() {
        return this.getBooleanAttribute('multi_value_answer');
    }
    public set multiValueAnswer(value: boolean | cdktn.IResolvable) {
        this._multiValueAnswer = value;
    }
    public resetMultiValueAnswer() {
        this._multiValueAnswer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiValueAnswerInput() {
        return this._multiValueAnswer;
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

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // resource_records - computed: true, optional: true, required: false
    private _resourceRecords?: string[]; 
    public get resourceRecords() {
        return this.getListAttribute('resource_records');
    }
    public set resourceRecords(value: string[]) {
        this._resourceRecords = value;
    }
    public resetResourceRecords() {
        this._resourceRecords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceRecordsInput() {
        return this._resourceRecords;
    }

    // set_identifier - computed: true, optional: true, required: false
    private _setIdentifier?: string; 
    public get setIdentifier() {
        return this.getStringAttribute('set_identifier');
    }
    public set setIdentifier(value: string) {
        this._setIdentifier = value;
    }
    public resetSetIdentifier() {
        this._setIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setIdentifierInput() {
        return this._setIdentifier;
    }

    // ttl - computed: true, optional: true, required: false
    private _ttl?: string; 
    public get ttl() {
        return this.getStringAttribute('ttl');
    }
    public set ttl(value: string) {
        this._ttl = value;
    }
    public resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
        return this._ttl;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alias_target: ccRecordSetAliasTargetPropertyToTerraform(this._aliasTarget.internalValue),
            cidr_routing_config: ccRecordSetCidrRoutingConfigPropertyToTerraform(this._cidrRoutingConfig.internalValue),
            comment: cdktn.stringToTerraform(this._comment),
            failover: cdktn.stringToTerraform(this._failover),
            geo_location: ccRecordSetGeoLocationPropertyToTerraform(this._geoLocation.internalValue),
            health_check_id: cdktn.stringToTerraform(this._healthCheckId),
            hosted_zone_id: cdktn.stringToTerraform(this._hostedZoneId),
            hosted_zone_name: cdktn.stringToTerraform(this._hostedZoneName),
            multi_value_answer: cdktn.booleanToTerraform(this._multiValueAnswer),
            name: cdktn.stringToTerraform(this._name),
            region: cdktn.stringToTerraform(this._region),
            resource_records: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceRecords),
            set_identifier: cdktn.stringToTerraform(this._setIdentifier),
            ttl: cdktn.stringToTerraform(this._ttl),
            type: cdktn.stringToTerraform(this._type),
            weight: cdktn.numberToTerraform(this._weight),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alias_target: {
                value: ccRecordSetAliasTargetPropertyToHclTerraform(this._aliasTarget.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRecordSet.AliasTargetProperty",
            },
            cidr_routing_config: {
                value: ccRecordSetCidrRoutingConfigPropertyToHclTerraform(this._cidrRoutingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRecordSet.CidrRoutingConfigProperty",
            },
            comment: {
                value: cdktn.stringToHclTerraform(this._comment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            failover: {
                value: cdktn.stringToHclTerraform(this._failover),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            geo_location: {
                value: ccRecordSetGeoLocationPropertyToHclTerraform(this._geoLocation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRecordSet.GeoLocationProperty",
            },
            health_check_id: {
                value: cdktn.stringToHclTerraform(this._healthCheckId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hosted_zone_id: {
                value: cdktn.stringToHclTerraform(this._hostedZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hosted_zone_name: {
                value: cdktn.stringToHclTerraform(this._hostedZoneName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multi_value_answer: {
                value: cdktn.booleanToHclTerraform(this._multiValueAnswer),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region: {
                value: cdktn.stringToHclTerraform(this._region),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_records: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceRecords),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            set_identifier: {
                value: cdktn.stringToHclTerraform(this._setIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ttl: {
                value: cdktn.stringToHclTerraform(this._ttl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            weight: {
                value: cdktn.numberToHclTerraform(this._weight),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRecordSetAliasTargetPropertyToTerraform(struct?: CcRecordSet.AliasTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_name: cdktn.stringToTerraform(struct!.dnsName),
        evaluate_target_health: cdktn.booleanToTerraform(struct!.evaluateTargetHealth),
        hosted_zone_id: cdktn.stringToTerraform(struct!.hostedZoneId),
    }
}


export function ccRecordSetAliasTargetPropertyToHclTerraform(struct?: CcRecordSet.AliasTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_name: {
            value: cdktn.stringToHclTerraform(struct!.dnsName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        evaluate_target_health: {
            value: cdktn.booleanToHclTerraform(struct!.evaluateTargetHealth),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hosted_zone_id: {
            value: cdktn.stringToHclTerraform(struct!.hostedZoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecordSetCidrRoutingConfigPropertyToTerraform(struct?: CcRecordSet.CidrRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        collection_id: cdktn.stringToTerraform(struct!.collectionId),
        location_name: cdktn.stringToTerraform(struct!.locationName),
    }
}


export function ccRecordSetCidrRoutingConfigPropertyToHclTerraform(struct?: CcRecordSet.CidrRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        collection_id: {
            value: cdktn.stringToHclTerraform(struct!.collectionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location_name: {
            value: cdktn.stringToHclTerraform(struct!.locationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecordSetGeoLocationPropertyToTerraform(struct?: CcRecordSet.GeoLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        continent_code: cdktn.stringToTerraform(struct!.continentCode),
        country_code: cdktn.stringToTerraform(struct!.countryCode),
        subdivision_code: cdktn.stringToTerraform(struct!.subdivisionCode),
    }
}


export function ccRecordSetGeoLocationPropertyToHclTerraform(struct?: CcRecordSet.GeoLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        continent_code: {
            value: cdktn.stringToHclTerraform(struct!.continentCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        country_code: {
            value: cdktn.stringToHclTerraform(struct!.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subdivision_code: {
            value: cdktn.stringToHclTerraform(struct!.subdivisionCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRecordSet {
export interface AliasTargetProperty {
    /**
    * The value that you specify depends on where you want to route queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#dns_name CcRecordSet#dns_name}
    */
    readonly dnsName?: string;
    /**
    * When EvaluateTargetHealth is true, an alias resource record set inherits the health of the referenced AWS resource, such as an ELB load balancer or another resource record set in the hosted zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#evaluate_target_health CcRecordSet#evaluate_target_health}
    */
    readonly evaluateTargetHealth?: boolean | cdktn.IResolvable;
    /**
    * The value used depends on where you want to route traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_id CcRecordSet#hosted_zone_id}
    */
    readonly hostedZoneId?: string;
}
export class AliasTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AliasTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsName = this._dnsName;
        }
        if (this._evaluateTargetHealth !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
        }
        if (this._hostedZoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostedZoneId = this._hostedZoneId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AliasTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsName = undefined;
            this._evaluateTargetHealth = undefined;
            this._hostedZoneId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsName = value.dnsName;
            this._evaluateTargetHealth = value.evaluateTargetHealth;
            this._hostedZoneId = value.hostedZoneId;
        }
    }

    // dns_name - computed: true, optional: true, required: false
    private _dnsName?: string; 
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    public set dnsName(value: string) {
        this._dnsName = value;
    }
    public resetDnsName() {
        this._dnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsNameInput() {
        return this._dnsName;
    }

    // evaluate_target_health - computed: true, optional: true, required: false
    private _evaluateTargetHealth?: boolean | cdktn.IResolvable; 
    public get evaluateTargetHealth() {
        return this.getBooleanAttribute('evaluate_target_health');
    }
    public set evaluateTargetHealth(value: boolean | cdktn.IResolvable) {
        this._evaluateTargetHealth = value;
    }
    public resetEvaluateTargetHealth() {
        this._evaluateTargetHealth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluateTargetHealthInput() {
        return this._evaluateTargetHealth;
    }

    // hosted_zone_id - computed: true, optional: true, required: false
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
        this._hostedZoneId = value;
    }
    public resetHostedZoneId() {
        this._hostedZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
        return this._hostedZoneId;
    }
}
export interface CidrRoutingConfigProperty {
    /**
    * The CIDR collection ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#collection_id CcRecordSet#collection_id}
    */
    readonly collectionId?: string;
    /**
    * The CIDR collection location name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#location_name CcRecordSet#location_name}
    */
    readonly locationName?: string;
}
export class CidrRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CidrRoutingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._collectionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.collectionId = this._collectionId;
        }
        if (this._locationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.locationName = this._locationName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CidrRoutingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._collectionId = undefined;
            this._locationName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._collectionId = value.collectionId;
            this._locationName = value.locationName;
        }
    }

    // collection_id - computed: true, optional: true, required: false
    private _collectionId?: string; 
    public get collectionId() {
        return this.getStringAttribute('collection_id');
    }
    public set collectionId(value: string) {
        this._collectionId = value;
    }
    public resetCollectionId() {
        this._collectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get collectionIdInput() {
        return this._collectionId;
    }

    // location_name - computed: true, optional: true, required: false
    private _locationName?: string; 
    public get locationName() {
        return this.getStringAttribute('location_name');
    }
    public set locationName(value: string) {
        this._locationName = value;
    }
    public resetLocationName() {
        this._locationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationNameInput() {
        return this._locationName;
    }
}
export interface GeoLocationProperty {
    /**
    * For geolocation resource record sets, a two-letter abbreviation that identifies a continent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#continent_code CcRecordSet#continent_code}
    */
    readonly continentCode?: string;
    /**
    * For geolocation resource record sets, the two-letter code for a country.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#country_code CcRecordSet#country_code}
    */
    readonly countryCode?: string;
    /**
    * For geolocation resource record sets, the two-letter code for a state of the United States.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#subdivision_code CcRecordSet#subdivision_code}
    */
    readonly subdivisionCode?: string;
}
export class GeoLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GeoLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._continentCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.continentCode = this._continentCode;
        }
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        if (this._subdivisionCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.subdivisionCode = this._subdivisionCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GeoLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._continentCode = undefined;
            this._countryCode = undefined;
            this._subdivisionCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._continentCode = value.continentCode;
            this._countryCode = value.countryCode;
            this._subdivisionCode = value.subdivisionCode;
        }
    }

    // continent_code - computed: true, optional: true, required: false
    private _continentCode?: string; 
    public get continentCode() {
        return this.getStringAttribute('continent_code');
    }
    public set continentCode(value: string) {
        this._continentCode = value;
    }
    public resetContinentCode() {
        this._continentCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get continentCodeInput() {
        return this._continentCode;
    }

    // country_code - computed: true, optional: true, required: false
    private _countryCode?: string; 
    public get countryCode() {
        return this.getStringAttribute('country_code');
    }
    public set countryCode(value: string) {
        this._countryCode = value;
    }
    public resetCountryCode() {
        this._countryCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryCodeInput() {
        return this._countryCode;
    }

    // subdivision_code - computed: true, optional: true, required: false
    private _subdivisionCode?: string; 
    public get subdivisionCode() {
        return this.getStringAttribute('subdivision_code');
    }
    public set subdivisionCode(value: string) {
        this._subdivisionCode = value;
    }
    public resetSubdivisionCode() {
        this._subdivisionCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdivisionCodeInput() {
        return this._subdivisionCode;
    }
}
}
