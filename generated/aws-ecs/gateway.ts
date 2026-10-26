// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration for the gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#configuration CcGateway#configuration}
    */
    readonly configuration: CcGateway.ConfigurationProperty;
    /**
    * Whether deletion protection is enabled for the gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#deletion_protection CcGateway#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#gateway_name CcGateway#gateway_name}
    */
    readonly gatewayName: string;
    /**
    * The ARN of the IAM role that ECS uses to manage infrastructure for the gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#infrastructure_role_arn CcGateway#infrastructure_role_arn}
    */
    readonly infrastructureRoleArn: string;
    /**
    * Specifies whether to propagate the tags from the gateway to other resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#propagate_tags CcGateway#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * The metadata that you apply to the gateway to help you categorize and organize them.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#tags CcGateway#tags}
    */
    readonly tags?: CcGateway.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway awscc_ecs_gateway}
*/
export class CcGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGateway to import
    * @param importFromId The id of the existing CcGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway awscc_ecs_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGatewayProps
    */
    public constructor(scope: Construct, id: string, config: CcGatewayProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_gateway',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._configuration.internalValue = config.configuration;
        this._deletionProtection = config.deletionProtection;
        this._gatewayName = config.gatewayName;
        this._infrastructureRoleArn = config.infrastructureRoleArn;
        this._propagateTags = config.propagateTags;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_type - computed: true, optional: false, required: false
    public get accessType() {
        return this.getStringAttribute('access_type');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcGateway.ConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcGateway.ConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection?: boolean | cdktn.IResolvable; 
    public get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    public set deletionProtection(value: boolean | cdktn.IResolvable) {
        this._deletionProtection = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection;
    }

    // gateway_name - computed: false, optional: false, required: true
    private _gatewayName?: string; 
    public get gatewayName() {
        return this.getStringAttribute('gateway_name');
    }
    public set gatewayName(value: string) {
        this._gatewayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayNameInput() {
        return this._gatewayName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // infrastructure_role_arn - computed: false, optional: false, required: true
    private _infrastructureRoleArn?: string; 
    public get infrastructureRoleArn() {
        return this.getStringAttribute('infrastructure_role_arn');
    }
    public set infrastructureRoleArn(value: string) {
        this._infrastructureRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureRoleArnInput() {
        return this._infrastructureRoleArn;
    }

    // propagate_tags - computed: true, optional: true, required: false
    private _propagateTags?: string; 
    public get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string) {
        this._propagateTags = value;
    }
    public resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
        return this._propagateTags;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcGateway.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcGateway.TagsProperty[] | cdktn.IResolvable) {
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
            configuration: ccGatewayConfigurationPropertyToTerraform(this._configuration.internalValue),
            deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
            gateway_name: cdktn.stringToTerraform(this._gatewayName),
            infrastructure_role_arn: cdktn.stringToTerraform(this._infrastructureRoleArn),
            propagate_tags: cdktn.stringToTerraform(this._propagateTags),
            tags: cdktn.listMapper(ccGatewayTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: ccGatewayConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGateway.ConfigurationProperty",
            },
            deletion_protection: {
                value: cdktn.booleanToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            gateway_name: {
                value: cdktn.stringToHclTerraform(this._gatewayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            infrastructure_role_arn: {
                value: cdktn.stringToHclTerraform(this._infrastructureRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            propagate_tags: {
                value: cdktn.stringToHclTerraform(this._propagateTags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccGatewayTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGateway.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGatewayS3PropertyToTerraform(struct?: CcGateway.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccGatewayS3PropertyToHclTerraform(struct?: CcGateway.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayDestinationPropertyToTerraform(struct?: CcGateway.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3: ccGatewayS3PropertyToTerraform(struct!.s3),
    }
}


export function ccGatewayDestinationPropertyToHclTerraform(struct?: CcGateway.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3: {
            value: ccGatewayS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayAccessLogsPropertyToTerraform(struct?: CcGateway.AccessLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccGatewayDestinationPropertyToTerraform(struct!.destination),
    }
}


export function ccGatewayAccessLogsPropertyToHclTerraform(struct?: CcGateway.AccessLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccGatewayDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayNetworkConfigurationPropertyToTerraform(struct?: CcGateway.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        inbound_security_group: cdktn.stringToTerraform(struct!.inboundSecurityGroup),
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccGatewayNetworkConfigurationPropertyToHclTerraform(struct?: CcGateway.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        inbound_security_group: {
            value: cdktn.stringToHclTerraform(struct!.inboundSecurityGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayHeaderPropertyToTerraform(struct?: CcGateway.HeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccGatewayHeaderPropertyToHclTerraform(struct?: CcGateway.HeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayTestTrafficRulesPropertyToTerraform(struct?: CcGateway.TestTrafficRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: ccGatewayHeaderPropertyToTerraform(struct!.header),
    }
}


export function ccGatewayTestTrafficRulesPropertyToHclTerraform(struct?: CcGateway.TestTrafficRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: ccGatewayHeaderPropertyToHclTerraform(struct!.header),
            isBlock: true,
            type: "struct",
            storageClassType: "HeaderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayHostSharedAlbPropertyToTerraform(struct?: CcGateway.HostSharedAlbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_logs: ccGatewayAccessLogsPropertyToTerraform(struct!.accessLogs),
        http_desync: cdktn.stringToTerraform(struct!.httpDesync),
        max_alb_count: cdktn.numberToTerraform(struct!.maxAlbCount),
        network_configuration: ccGatewayNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
        port: cdktn.numberToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        scheme: cdktn.stringToTerraform(struct!.scheme),
        test_traffic_rules: ccGatewayTestTrafficRulesPropertyToTerraform(struct!.testTrafficRules),
        web_acl_arn: cdktn.stringToTerraform(struct!.webAclArn),
    }
}


export function ccGatewayHostSharedAlbPropertyToHclTerraform(struct?: CcGateway.HostSharedAlbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_logs: {
            value: ccGatewayAccessLogsPropertyToHclTerraform(struct!.accessLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessLogsProperty",
        },
        http_desync: {
            value: cdktn.stringToHclTerraform(struct!.httpDesync),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_alb_count: {
            value: cdktn.numberToHclTerraform(struct!.maxAlbCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_configuration: {
            value: ccGatewayNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkConfigurationProperty",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheme: {
            value: cdktn.stringToHclTerraform(struct!.scheme),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        test_traffic_rules: {
            value: ccGatewayTestTrafficRulesPropertyToHclTerraform(struct!.testTrafficRules),
            isBlock: true,
            type: "struct",
            storageClassType: "TestTrafficRulesProperty",
        },
        web_acl_arn: {
            value: cdktn.stringToHclTerraform(struct!.webAclArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayConfigurationPropertyToTerraform(struct?: CcGateway.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_shared_alb: ccGatewayHostSharedAlbPropertyToTerraform(struct!.hostSharedAlb),
    }
}


export function ccGatewayConfigurationPropertyToHclTerraform(struct?: CcGateway.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_shared_alb: {
            value: ccGatewayHostSharedAlbPropertyToHclTerraform(struct!.hostSharedAlb),
            isBlock: true,
            type: "struct",
            storageClassType: "HostSharedAlbProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayTagsPropertyToTerraform(struct?: CcGateway.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGatewayTagsPropertyToHclTerraform(struct?: CcGateway.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcGateway {
export interface S3Property {
    /**
    * The S3 bucket for access logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#bucket CcGateway#bucket}
    */
    readonly bucket?: string;
    /**
    * The S3 prefix for access logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#prefix CcGateway#prefix}
    */
    readonly prefix?: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._prefix = value.prefix;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface DestinationProperty {
    /**
    * The S3 destination for gateway ALB access logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#s3 CcGateway#s3}
    */
    readonly s3?: S3Property;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3.internalValue = value.s3;
        }
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3Property) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface AccessLogsProperty {
    /**
    * The destination for gateway ALB access logs. Exactly one destination type must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#destination CcGateway#destination}
    */
    readonly destination?: DestinationProperty;
}
export class AccessLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination.internalValue = value.destination;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination = new DestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: DestinationProperty) {
        this._destination.internalValue = value;
    }
    public resetDestination() {
        this._destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * The inbound security group for the ALB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#inbound_security_group CcGateway#inbound_security_group}
    */
    readonly inboundSecurityGroup?: string;
    /**
    * The IP address type for the ALB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#ip_address_type CcGateway#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The subnets for the ALB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#subnets CcGateway#subnets}
    */
    readonly subnets?: string[];
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inboundSecurityGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundSecurityGroup = this._inboundSecurityGroup;
        }
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inboundSecurityGroup = undefined;
            this._ipAddressType = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inboundSecurityGroup = value.inboundSecurityGroup;
            this._ipAddressType = value.ipAddressType;
            this._subnets = value.subnets;
        }
    }

    // inbound_security_group - computed: true, optional: true, required: false
    private _inboundSecurityGroup?: string; 
    public get inboundSecurityGroup() {
        return this.getStringAttribute('inbound_security_group');
    }
    public set inboundSecurityGroup(value: string) {
        this._inboundSecurityGroup = value;
    }
    public resetInboundSecurityGroup() {
        this._inboundSecurityGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundSecurityGroupInput() {
        return this._inboundSecurityGroup;
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

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface HeaderProperty {
    /**
    * The name of the header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#name CcGateway#name}
    */
    readonly name?: string;
    /**
    * The values for the header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#values CcGateway#values}
    */
    readonly values?: string[];
}
export class HeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
        }
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}
export interface TestTrafficRulesProperty {
    /**
    * The header configuration for test traffic routing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#header CcGateway#header}
    */
    readonly header?: HeaderProperty;
}
export class TestTrafficRulesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TestTrafficRulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TestTrafficRulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header.internalValue = value.header;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header = new HeaderPropertyOutputReference(this, "header");
    public get header() {
        return this._header;
    }
    public putHeader(value: HeaderProperty) {
        this._header.internalValue = value;
    }
    public resetHeader() {
        this._header.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header.internalValue;
    }
}
export interface HostSharedAlbProperty {
    /**
    * The access log configuration for the gateway ALB. Access logging is enabled by the presence of a destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#access_logs CcGateway#access_logs}
    */
    readonly accessLogs?: AccessLogsProperty;
    /**
    * The HTTP desync mitigation mode for the ALB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#http_desync CcGateway#http_desync}
    */
    readonly httpDesync?: string;
    /**
    * The maximum number of ALBs to provision for the gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#max_alb_count CcGateway#max_alb_count}
    */
    readonly maxAlbCount?: number;
    /**
    * The network configuration for the gateway ALB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#network_configuration CcGateway#network_configuration}
    */
    readonly networkConfiguration?: NetworkConfigurationProperty;
    /**
    * The port on which the ALB listens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#port CcGateway#port}
    */
    readonly port?: number;
    /**
    * The protocol for the ALB listener.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#protocol CcGateway#protocol}
    */
    readonly protocol?: string;
    /**
    * The scheme for the ALB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#scheme CcGateway#scheme}
    */
    readonly scheme?: string;
    /**
    * The test traffic rules for the gateway ALB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#test_traffic_rules CcGateway#test_traffic_rules}
    */
    readonly testTrafficRules?: TestTrafficRulesProperty;
    /**
    * The ARN of the WAFv2 web ACL to associate with the ALB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#web_acl_arn CcGateway#web_acl_arn}
    */
    readonly webAclArn?: string;
}
export class HostSharedAlbPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HostSharedAlbProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessLogs = this._accessLogs?.internalValue;
        }
        if (this._httpDesync !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpDesync = this._httpDesync;
        }
        if (this._maxAlbCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAlbCount = this._maxAlbCount;
        }
        if (this._networkConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._scheme !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheme = this._scheme;
        }
        if (this._testTrafficRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.testTrafficRules = this._testTrafficRules?.internalValue;
        }
        if (this._webAclArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.webAclArn = this._webAclArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostSharedAlbProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessLogs.internalValue = undefined;
            this._httpDesync = undefined;
            this._maxAlbCount = undefined;
            this._networkConfiguration.internalValue = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._scheme = undefined;
            this._testTrafficRules.internalValue = undefined;
            this._webAclArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessLogs.internalValue = value.accessLogs;
            this._httpDesync = value.httpDesync;
            this._maxAlbCount = value.maxAlbCount;
            this._networkConfiguration.internalValue = value.networkConfiguration;
            this._port = value.port;
            this._protocol = value.protocol;
            this._scheme = value.scheme;
            this._testTrafficRules.internalValue = value.testTrafficRules;
            this._webAclArn = value.webAclArn;
        }
    }

    // access_logs - computed: true, optional: true, required: false
    private _accessLogs = new AccessLogsPropertyOutputReference(this, "access_logs");
    public get accessLogs() {
        return this._accessLogs;
    }
    public putAccessLogs(value: AccessLogsProperty) {
        this._accessLogs.internalValue = value;
    }
    public resetAccessLogs() {
        this._accessLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogsInput() {
        return this._accessLogs.internalValue;
    }

    // current_alb_count - computed: true, optional: false, required: false
    public get currentAlbCount() {
        return this.getNumberAttribute('current_alb_count');
    }

    // http_desync - computed: true, optional: true, required: false
    private _httpDesync?: string; 
    public get httpDesync() {
        return this.getStringAttribute('http_desync');
    }
    public set httpDesync(value: string) {
        this._httpDesync = value;
    }
    public resetHttpDesync() {
        this._httpDesync = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpDesyncInput() {
        return this._httpDesync;
    }

    // max_alb_count - computed: true, optional: true, required: false
    private _maxAlbCount?: number; 
    public get maxAlbCount() {
        return this.getNumberAttribute('max_alb_count');
    }
    public set maxAlbCount(value: number) {
        this._maxAlbCount = value;
    }
    public resetMaxAlbCount() {
        this._maxAlbCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAlbCountInput() {
        return this._maxAlbCount;
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
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

    // scheme - computed: true, optional: true, required: false
    private _scheme?: string; 
    public get scheme() {
        return this.getStringAttribute('scheme');
    }
    public set scheme(value: string) {
        this._scheme = value;
    }
    public resetScheme() {
        this._scheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemeInput() {
        return this._scheme;
    }

    // test_traffic_rules - computed: true, optional: true, required: false
    private _testTrafficRules = new TestTrafficRulesPropertyOutputReference(this, "test_traffic_rules");
    public get testTrafficRules() {
        return this._testTrafficRules;
    }
    public putTestTrafficRules(value: TestTrafficRulesProperty) {
        this._testTrafficRules.internalValue = value;
    }
    public resetTestTrafficRules() {
        this._testTrafficRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testTrafficRulesInput() {
        return this._testTrafficRules.internalValue;
    }

    // web_acl_arn - computed: true, optional: true, required: false
    private _webAclArn?: string; 
    public get webAclArn() {
        return this.getStringAttribute('web_acl_arn');
    }
    public set webAclArn(value: string) {
        this._webAclArn = value;
    }
    public resetWebAclArn() {
        this._webAclArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webAclArnInput() {
        return this._webAclArn;
    }
}
export interface ConfigurationProperty {
    /**
    * The host shared ALB configuration for the gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#host_shared_alb CcGateway#host_shared_alb}
    */
    readonly hostSharedAlb: HostSharedAlbProperty;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostSharedAlb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostSharedAlb = this._hostSharedAlb?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostSharedAlb.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostSharedAlb.internalValue = value.hostSharedAlb;
        }
    }

    // host_shared_alb - computed: false, optional: false, required: true
    private _hostSharedAlb = new HostSharedAlbPropertyOutputReference(this, "host_shared_alb");
    public get hostSharedAlb() {
        return this._hostSharedAlb;
    }
    public putHostSharedAlb(value: HostSharedAlbProperty) {
        this._hostSharedAlb.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostSharedAlbInput() {
        return this._hostSharedAlb.internalValue;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#key CcGateway#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#value CcGateway#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
