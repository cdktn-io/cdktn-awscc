// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHostedZoneProps extends cdktn.TerraformMetaArguments {
    /**
    * A complex type that contains an optional comment.
    *  If you don't want to specify a comment, omit the ``HostedZoneConfig`` and ``Comment`` elements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#hosted_zone_config CcHostedZone#hosted_zone_config}
    */
    readonly hostedZoneConfig?: CcHostedZone.HostedZoneConfigProperty;
    /**
    * The features configuration for the hosted zone, including accelerated recovery settings and status information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#hosted_zone_features CcHostedZone#hosted_zone_features}
    */
    readonly hostedZoneFeatures?: CcHostedZone.HostedZoneFeaturesProperty;
    /**
    * Adds, edits, or deletes tags for a health check or a hosted zone.
    *  For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#hosted_zone_tags CcHostedZone#hosted_zone_tags}
    */
    readonly hostedZoneTags?: CcHostedZone.HostedZoneTagProperty[] | cdktn.IResolvable;
    /**
    * The name of the domain. Specify a fully qualified domain name, for example, *www.example.com*. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
    *  If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of ``NameServers`` that are returned by the ``Fn::GetAtt`` intrinsic function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#name CcHostedZone#name}
    */
    readonly name?: string;
    /**
    * Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
    *  DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:
    *   +  Route 53 edge location that responded to the DNS query
    *   +  Domain or subdomain that was requested
    *   +  DNS record type, such as A or AAAA
    *   +  DNS response code, such as ``NoError`` or ``ServFail``
    *   
    *   + Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/* To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#query_logging_config CcHostedZone#query_logging_config}
    */
    readonly queryLoggingConfig?: CcHostedZone.QueryLoggingConfigProperty;
    /**
    * *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.
    *   For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#vp_cs CcHostedZone#vp_cs}
    */
    readonly vpCs?: CcHostedZone.VPCProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone awscc_route53_hosted_zone}
*/
export class CcHostedZone extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53_hosted_zone";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHostedZone resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHostedZone to import
    * @param importFromId The id of the existing CcHostedZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHostedZone to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_hosted_zone", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone awscc_route53_hosted_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHostedZoneProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcHostedZoneProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53_hosted_zone',
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
        this._hostedZoneConfig.internalValue = config.hostedZoneConfig;
        this._hostedZoneFeatures.internalValue = config.hostedZoneFeatures;
        this._hostedZoneTags.internalValue = config.hostedZoneTags;
        this._name = config.name;
        this._queryLoggingConfig.internalValue = config.queryLoggingConfig;
        this._vpCs.internalValue = config.vpCs;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // hosted_zone_config - computed: true, optional: true, required: false
    private _hostedZoneConfig = new CcHostedZone.HostedZoneConfigPropertyOutputReference(this, "hosted_zone_config");
    public get hostedZoneConfig() {
        return this._hostedZoneConfig;
    }
    public putHostedZoneConfig(value: CcHostedZone.HostedZoneConfigProperty) {
        this._hostedZoneConfig.internalValue = value;
    }
    public resetHostedZoneConfig() {
        this._hostedZoneConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneConfigInput() {
        return this._hostedZoneConfig.internalValue;
    }

    // hosted_zone_features - computed: true, optional: true, required: false
    private _hostedZoneFeatures = new CcHostedZone.HostedZoneFeaturesPropertyOutputReference(this, "hosted_zone_features");
    public get hostedZoneFeatures() {
        return this._hostedZoneFeatures;
    }
    public putHostedZoneFeatures(value: CcHostedZone.HostedZoneFeaturesProperty) {
        this._hostedZoneFeatures.internalValue = value;
    }
    public resetHostedZoneFeatures() {
        this._hostedZoneFeatures.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneFeaturesInput() {
        return this._hostedZoneFeatures.internalValue;
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }

    // hosted_zone_tags - computed: true, optional: true, required: false
    private _hostedZoneTags = new CcHostedZone.HostedZoneTagPropertyList(this, "hosted_zone_tags", true);
    public get hostedZoneTags() {
        return this._hostedZoneTags;
    }
    public putHostedZoneTags(value: CcHostedZone.HostedZoneTagProperty[] | cdktn.IResolvable) {
        this._hostedZoneTags.internalValue = value;
    }
    public resetHostedZoneTags() {
        this._hostedZoneTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneTagsInput() {
        return this._hostedZoneTags.internalValue;
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

    // name_servers - computed: true, optional: false, required: false
    public get nameServers() {
        return this.getListAttribute('name_servers');
    }

    // query_logging_config - computed: true, optional: true, required: false
    private _queryLoggingConfig = new CcHostedZone.QueryLoggingConfigPropertyOutputReference(this, "query_logging_config");
    public get queryLoggingConfig() {
        return this._queryLoggingConfig;
    }
    public putQueryLoggingConfig(value: CcHostedZone.QueryLoggingConfigProperty) {
        this._queryLoggingConfig.internalValue = value;
    }
    public resetQueryLoggingConfig() {
        this._queryLoggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryLoggingConfigInput() {
        return this._queryLoggingConfig.internalValue;
    }

    // vp_cs - computed: true, optional: true, required: false
    private _vpCs = new CcHostedZone.VPCPropertyList(this, "vp_cs", true);
    public get vpCs() {
        return this._vpCs;
    }
    public putVpCs(value: CcHostedZone.VPCProperty[] | cdktn.IResolvable) {
        this._vpCs.internalValue = value;
    }
    public resetVpCs() {
        this._vpCs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpCsInput() {
        return this._vpCs.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            hosted_zone_config: ccHostedZoneHostedZoneConfigPropertyToTerraform(this._hostedZoneConfig.internalValue),
            hosted_zone_features: ccHostedZoneHostedZoneFeaturesPropertyToTerraform(this._hostedZoneFeatures.internalValue),
            hosted_zone_tags: cdktn.listMapper(ccHostedZoneHostedZoneTagPropertyToTerraform, false)(this._hostedZoneTags.internalValue),
            name: cdktn.stringToTerraform(this._name),
            query_logging_config: ccHostedZoneQueryLoggingConfigPropertyToTerraform(this._queryLoggingConfig.internalValue),
            vp_cs: cdktn.listMapper(ccHostedZoneVPCPropertyToTerraform, false)(this._vpCs.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            hosted_zone_config: {
                value: ccHostedZoneHostedZoneConfigPropertyToHclTerraform(this._hostedZoneConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHostedZone.HostedZoneConfigProperty",
            },
            hosted_zone_features: {
                value: ccHostedZoneHostedZoneFeaturesPropertyToHclTerraform(this._hostedZoneFeatures.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHostedZone.HostedZoneFeaturesProperty",
            },
            hosted_zone_tags: {
                value: cdktn.listMapperHcl(ccHostedZoneHostedZoneTagPropertyToHclTerraform, false)(this._hostedZoneTags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcHostedZone.HostedZoneTagPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_logging_config: {
                value: ccHostedZoneQueryLoggingConfigPropertyToHclTerraform(this._queryLoggingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHostedZone.QueryLoggingConfigProperty",
            },
            vp_cs: {
                value: cdktn.listMapperHcl(ccHostedZoneVPCPropertyToHclTerraform, false)(this._vpCs.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcHostedZone.VPCPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccHostedZoneHostedZoneConfigPropertyToTerraform(struct?: CcHostedZone.HostedZoneConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
    }
}


export function ccHostedZoneHostedZoneConfigPropertyToHclTerraform(struct?: CcHostedZone.HostedZoneConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comment: {
            value: cdktn.stringToHclTerraform(struct!.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHostedZoneHostedZoneFeaturesPropertyToTerraform(struct?: CcHostedZone.HostedZoneFeaturesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_accelerated_recovery: cdktn.booleanToTerraform(struct!.enableAcceleratedRecovery),
    }
}


export function ccHostedZoneHostedZoneFeaturesPropertyToHclTerraform(struct?: CcHostedZone.HostedZoneFeaturesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_accelerated_recovery: {
            value: cdktn.booleanToHclTerraform(struct!.enableAcceleratedRecovery),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHostedZoneHostedZoneTagPropertyToTerraform(struct?: CcHostedZone.HostedZoneTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccHostedZoneHostedZoneTagPropertyToHclTerraform(struct?: CcHostedZone.HostedZoneTagProperty | cdktn.IResolvable): any {
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


export function ccHostedZoneQueryLoggingConfigPropertyToTerraform(struct?: CcHostedZone.QueryLoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_log_group_arn: cdktn.stringToTerraform(struct!.cloudwatchLogsLogGroupArn),
    }
}


export function ccHostedZoneQueryLoggingConfigPropertyToHclTerraform(struct?: CcHostedZone.QueryLoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.cloudwatchLogsLogGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHostedZoneVPCPropertyToTerraform(struct?: CcHostedZone.VPCProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
        vpc_region: cdktn.stringToTerraform(struct!.vpcRegion),
    }
}


export function ccHostedZoneVPCPropertyToHclTerraform(struct?: CcHostedZone.VPCProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_region: {
            value: cdktn.stringToHclTerraform(struct!.vpcRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcHostedZone {
export interface HostedZoneConfigProperty {
    /**
    * Any comments that you want to include about the hosted zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#comment CcHostedZone#comment}
    */
    readonly comment?: string;
}
export class HostedZoneConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HostedZoneConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostedZoneConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
        }
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
}
export interface HostedZoneFeaturesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#enable_accelerated_recovery CcHostedZone#enable_accelerated_recovery}
    */
    readonly enableAcceleratedRecovery?: boolean | cdktn.IResolvable;
}
export class HostedZoneFeaturesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HostedZoneFeaturesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableAcceleratedRecovery !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableAcceleratedRecovery = this._enableAcceleratedRecovery;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostedZoneFeaturesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableAcceleratedRecovery = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableAcceleratedRecovery = value.enableAcceleratedRecovery;
        }
    }

    // enable_accelerated_recovery - computed: true, optional: true, required: false
    private _enableAcceleratedRecovery?: boolean | cdktn.IResolvable; 
    public get enableAcceleratedRecovery() {
        return this.getBooleanAttribute('enable_accelerated_recovery');
    }
    public set enableAcceleratedRecovery(value: boolean | cdktn.IResolvable) {
        this._enableAcceleratedRecovery = value;
    }
    public resetEnableAcceleratedRecovery() {
        this._enableAcceleratedRecovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAcceleratedRecoveryInput() {
        return this._enableAcceleratedRecovery;
    }
}
export interface HostedZoneTagProperty {
    /**
    * The value of ``Key`` depends on the operation that you want to perform:
    *   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag.
    *   +  *Edit a tag*: ``Key`` is the name of the tag that you want to change the ``Value`` for.
    *   +  *Delete a key*: ``Key`` is the name of the tag you want to remove.
    *   +  *Give a name to a health check*: Edit the default ``Name`` tag. In the Amazon Route 53 console, the list of your health checks includes a *Name* column that lets you see the name that you've given to each health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#key CcHostedZone#key}
    */
    readonly key?: string;
    /**
    * The value of ``Value`` depends on the operation that you want to perform:
    *   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag.
    *   +  *Edit a tag*: ``Value`` is the new value that you want to assign the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#value CcHostedZone#value}
    */
    readonly value?: string;
}
export class HostedZoneTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HostedZoneTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: HostedZoneTagProperty | cdktn.IResolvable | undefined) {
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

export class HostedZoneTagPropertyList extends cdktn.ComplexList {
    public internalValue? : HostedZoneTagProperty[] | cdktn.IResolvable

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
    public get(index: number): HostedZoneTagPropertyOutputReference {
        return new HostedZoneTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QueryLoggingConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#cloudwatch_logs_log_group_arn CcHostedZone#cloudwatch_logs_log_group_arn}
    */
    readonly cloudwatchLogsLogGroupArn?: string;
}
export class QueryLoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryLoggingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsLogGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsLogGroupArn = this._cloudwatchLogsLogGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryLoggingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsLogGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsLogGroupArn = value.cloudwatchLogsLogGroupArn;
        }
    }

    // cloudwatch_logs_log_group_arn - computed: true, optional: true, required: false
    private _cloudwatchLogsLogGroupArn?: string; 
    public get cloudwatchLogsLogGroupArn() {
        return this.getStringAttribute('cloudwatch_logs_log_group_arn');
    }
    public set cloudwatchLogsLogGroupArn(value: string) {
        this._cloudwatchLogsLogGroupArn = value;
    }
    public resetCloudwatchLogsLogGroupArn() {
        this._cloudwatchLogsLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsLogGroupArnInput() {
        return this._cloudwatchLogsLogGroupArn;
    }
}
export interface VPCProperty {
    /**
    * *Private hosted zones only:* The ID of an Amazon VPC.
    *   For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#vpc_id CcHostedZone#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * *Private hosted zones only:* The region that an Amazon VPC was created in.
    *   For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_hosted_zone#vpc_region CcHostedZone#vpc_region}
    */
    readonly vpcRegion?: string;
}
export class VPCPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VPCProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        if (this._vpcRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcRegion = this._vpcRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VPCProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcId = undefined;
            this._vpcRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcId = value.vpcId;
            this._vpcRegion = value.vpcRegion;
        }
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // vpc_region - computed: true, optional: true, required: false
    private _vpcRegion?: string; 
    public get vpcRegion() {
        return this.getStringAttribute('vpc_region');
    }
    public set vpcRegion(value: string) {
        this._vpcRegion = value;
    }
    public resetVpcRegion() {
        this._vpcRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcRegionInput() {
        return this._vpcRegion;
    }
}

export class VPCPropertyList extends cdktn.ComplexList {
    public internalValue? : VPCProperty[] | cdktn.IResolvable

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
    public get(index: number): VPCPropertyOutputReference {
        return new VPCPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
